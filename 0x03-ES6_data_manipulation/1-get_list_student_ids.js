export default function getListStudentIds(arrayOfStudentsObjects) {
  if (!Array.isArray(arrayOfStudentsObjects)) {
    return [];
  }

  return arrayOfStudentsObjects.map((currentObject) => currentObject.id);
}
