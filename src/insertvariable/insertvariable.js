import Model from '@ckeditor/ckeditor5-ui/src/model';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import {
  createDropdown,
  addListToDropdown,
} from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class InsertVariable extends Plugin {
  init() {
    const options = this.editor.config.get('insertVariable.items');

    this.editor.ui.componentFactory.add('insertVariable', locale => {
      const dropdownView = createDropdown(locale);

      dropdownView.class = 'ck-dropdown-change-case';
          
      dropdownView.buttonView.set({
        label: 'Variáveis',
        withText: true,
      });

      const items = this.loadVariables(options);

      addListToDropdown(dropdownView, items);

      dropdownView.on('execute', eventInfo => {
        const {id} = eventInfo.source;

        this.editor.model.change(writer => {
          const insertPosition =
            this.editor.model.document.selection.getFirstPosition();
          writer.insertText(id, insertPosition);
        });
      });

      return dropdownView;
    });
  }

  loadVariables(options) {
    if (!options) {
      return [];
    }

    const items = new Collection();

    options.forEach(item => {
      items.add({
        type: 'button',
        model: new Model({
          id: item.key,
          withText: true,
          label: item.value,
          class: 'ck-button-insert-variable'
        }),
      });
    });

    return items;
  }
}
