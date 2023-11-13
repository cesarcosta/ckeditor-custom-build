import Model from '@ckeditor/ckeditor5-ui/src/model';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import {
  createDropdown,
  addListToDropdown,
} from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class ChangeCase extends Plugin {
  init() {
    const editor = this.editor;
    const model = editor.model;
    const selection = model.document.selection;
    const schema = model.schema;
    const conversion = editor.conversion;

    schema.extend('$text', {allowAttributes: 'textTransform'});
    schema.setAttributeProperties('textTransform', {isFormatting: true});

    conversion.attributeToElement({
      model: {
        key: 'textTransform',
        values: ['uppercase', 'lowercase'],
        name: '$text',
      },

      view: {
        uppercase: {
          name: 'span',
          styles: {
            'text-transform': 'uppercase',
          },
        },
        lowercase: {
          name: 'span',
          styles: {
            'text-transform': 'lowercase',
          },
        },
      },
    });

    this.editor.ui.componentFactory.add('changeCase', locale => {
      const dropdownView = createDropdown(locale);

      dropdownView.class = 'ck-dropdown-change-case';

      dropdownView.buttonView.set({
        label: 'Aa',
        withText: true,
      });

      const items = new Collection();
      items.add({
        type: 'button',
        model: new Model({
          id: 'uppercase',
          withText: true,
          label: 'Maiúsculo',
          class: 'ck-button-change-case'
        }),
      });

      items.add({
        type: 'button',
        model: new Model({
          id: 'lowercase',
          withText: true,
          label: 'Minúsculo',
          class: 'ck-button-change-case'
        }),
      });

      addListToDropdown(dropdownView, items);

      dropdownView.on('execute', eventInfo => {
        const {id} = eventInfo.source;

        const ranges = schema.getValidRanges(
          selection.getRanges(),
          'textTransform'
        );

        for (const range of ranges) {
          model.change(writer => {
            writer.setAttribute(
              'textTransform',
              id === 'uppercase' ? 'uppercase' : 'lowercase',
              range
            );
          });
        }
      });

      return dropdownView;
    });
  }
}
