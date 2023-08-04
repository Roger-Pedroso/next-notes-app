/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ztv4ol6iv3xr7ln",
    "created": "2023-08-04 20:40:14.473Z",
    "updated": "2023-08-04 20:40:14.473Z",
    "name": "next_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "igwbgwn3",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ztv4ol6iv3xr7ln");

  return dao.deleteCollection(collection);
})
