import Dexie from "dexie";

const dexieDB = new Dexie("orderly-docs");
dexieDB.version(1).stores({ topics: "++id, topic, docs" });

export default dexieDB;
