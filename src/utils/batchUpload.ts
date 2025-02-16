/*
1. Create a function that accepts an array of File objects (or File-like objects).
2. Upload each file using client.assets.upload (consider using Promise.all if you want parallel uploads).
3. For each uploaded asset, create a corresponding document object that includes the asset’s reference.
4. Start a transaction using client.transaction().
5. Add all create operations to the transaction.
6. Commit the transaction to save all documents at once.
 * */

import { client } from "../lib/sanity";

// Define the photo type according to the Sanity schema
interface PhotoDoc {
  _type: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  // add any additional fields as needed (e.g. alt text)
  alt?: string;
}

export async function batchUploadPhotos(
  files: File[],
  altText?: string,
): Promise<void> {
  try {
    // upload all files concurrently and await their completions
    const assetUploads = await Promise.all(
      files.map((file) => client.assets.upload("image", file)),
    );

    // build a transaction for creating multiple photo documents
    const transaction = client.transaction();

    assetUploads.forEach((asset) => {
      const photoDoc: PhotoDoc = {
        _type: "photo", // make sure this matches your schema type
        image: {
          _type: "image",
          asset: { _ref: asset._id },
        },
        alt: altText || "",
      };
      transaction.create(photoDoc);
    });

    // commit the transaction to save all documents at once
    await transaction.commit();
    console.log("Batch upload successful");
  } catch (error) {
    console.error("Batch upload failed", error);
  }
}
