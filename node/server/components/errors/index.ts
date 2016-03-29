import { join } from "path";
import { root } from "../../configs";

const pageNotFound = (req, res) => {
  const viewFilePath = join(root, 'server/views/404.html');
  const statusCode = 404;
  const result = { status: statusCode };

  res.status(result.status);
  // if the file doesn't exist of there is an error reading it just return a json with the error
  res.sendFile(viewFilePath, (err) => {
    if (err) return res.json(result, result.status);
  });
};

export default {
  404: pageNotFound
};
