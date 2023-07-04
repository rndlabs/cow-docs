# Get the AppData Hex

The `AppData` hex points to an IPFS document with the metadata attached to the order.

You can calculate the `AppData` Hex, and its corresponding `cidV0` using the SDK:

```javascript
import { MetadataApi } from '@cowprotocol/app-data'

export const metadataApi = new MetadataApi()

const { appDataHash, cidv0 } = await metadataApi.calculateAppDataHash(appDataDoc)
```

Note how this operation is deterministic, so given the same document, it will always generate the same hash. Also, this operation is done locally, so it's not uploading anything to IPFS, its just calculating what will be the hash that maps to the provided document.

This method can be used to calculate the actual hash before uploading the document to IPFS. This way, when you post an new order, you don't need to wait until the uploading to IPFS is completed.
