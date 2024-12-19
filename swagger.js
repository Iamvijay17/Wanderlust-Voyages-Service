import fs from "fs";
import path from "path";

const loadJson = () => {
  // Adjust the path to ensure it points to the correct location of swagger.json
  const jsonPath = path.resolve(process.cwd(), "swagger.json");

  // Log the resolved path for debugging
  console.log("Resolved JSON Path:", jsonPath);

  try {
    const file = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(file);
  } catch (error) {
    console.error("Error loading Swagger JSON file:", error.message);
    throw error;
  }
};

const swaggerSpec = loadJson();

export default swaggerSpec;
