import schemaModel from './schema.db';


// Run `./node_modules/.bin/babel-node src/plugins/schema/db/init.db.js` to execute data.
schemaModel.create({
  name: 'article',
  label: 'Article',
  form_schema: {
    "title": "Article",
    "type": "object",
    "properties": {
      "name": {"type": "string", "title": "Name"},
      "articleBody": {"type": "string", "title": "Body"}
    },
    "required": [
      "name"
    ]
  },
  ui_schema: {
    "name": {
      "ui:autofocus": true
    },
    "articleBody": {
      "ui:widget": "textarea"
    }
  }
})
.then(function(schema) {
  console.log('Created: ', schema.get({ // eslint-disable-line no-console
    plain: true
  }));
});
