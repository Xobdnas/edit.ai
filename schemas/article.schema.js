// Sample {type}.schema.js || {type}.schema.json (for generated schemas?)
const articleSchema = {
  key: "cw:article", // Thing -> CreativeWork (cw) -> Article
  name: "Article",
  description: "An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.",
  required: ["name", "articleBody"],
  properties: { // Fields. This maps to react-jsonschema-form schema.properties
    name: {
      type: "string",
      title: "Title",
    },
    articleBody: {
      type: "string",
      title: "Body",
    }
  },
  ui: { // UI config. This maps to react-jsonschema-form uiSchema
    name: {
      "ui:autofocus": true,
      "ui:help": "Title to indentify your Article",
      "ui:placeholder": "Ex. Good Title for Article"
    },
    articleBody: {
      "ui:help": "Make sure you have a body",
      "ui:widget": "textarea"
    }
  }
}

export default articleSchema;
