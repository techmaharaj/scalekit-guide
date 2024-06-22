const fs = require("fs");
const path = require("path");
const _ = require("lodash");

/**
 * Example of how to call this fn
 *
 * const docObjects = generateDocObjects('your-folder-name', {
  'file1.md': 'Custom Title 1',
  'file2.md': 'Custom Title 2',
});
console.log(docObjects);
 */

export function generateDocObjects(dirName, customTitles = {}) {
  const projectRoot = path.resolve(__dirname, "..", "..");
  const docsDir = path.join(projectRoot, "docs", dirName);
  const files = fs
    .readdirSync(docsDir)
    .filter((file) => !file.startsWith("index."));

  return files.map((file) => {
    const id = path.join(dirName, path.basename(file, path.extname(file)));
    const defaultLabel = _.startCase(path.basename(file, path.extname(file)));
    const label = customTitles[file] || defaultLabel;

    return {
      type: "doc",
      label,
      id,
    };
  });
}
