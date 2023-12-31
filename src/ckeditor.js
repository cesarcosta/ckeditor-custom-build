/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import LineHeight from './lineheight/lineheight.js';
import ChangeCase from './changecase/changecase.js';
import InsertVariable from './insertvariable/insertvariable.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import { DocumentList, DocumentListProperties } from '@ckeditor/ckeditor5-list';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  SourceEditing,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  LineHeight,
  ChangeCase,
  InsertVariable,
  Code,
  DocumentList,
  DocumentListProperties,
  RemoveFormat,
  SelectAll,
  Highlight,
  HorizontalLine,
  FindAndReplace,
  WordCount
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'sourceEditing',
      'heading',
      '|',
      'code',
			'selectAll',
      'fontSize',
      'fontFamily',
      '|',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      '|',
      'alignment',
      'lineHeight',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'outdent',
      'indent',
      '|',
      'link',
      'blockQuote',
      'imageUpload',
      'insertTable',
      '|',
      'undo',
      'redo',
      '|',
      'changeCase',
      'insertVariable',
      '|',
      'horizontalLine',
			'pageBreak',
			'removeFormat',
      'highlight',
			'findAndReplace',
    ],
  },
  language: 'pt-br',
  image: {
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
  fontBackgroundColor: {
    colors: [
      {
        color: '#000000',
        label: 'Black',
      },
      {
        color: '#696969',
        label: 'Dim grey',
      },
      {
        color: '#808080',
        label: 'Grey',
      },
      {
        color: '#D3D3D3',
        label: 'Light grey',
      },
      {
        color: '#FFFFFF',
        label: 'White',
        hasBorder: true,
      },
      {
        color: '#FF0000',
        label: 'Red',
      },
      {
        color: '#FFA500',
        label: 'Orange',
      },
      {
        color: '#FFFF00',
        label: 'Yellow',
      },
      {
        color: '#90EE90',
        label: 'Light green',
      },
      {
        color: '#00FF00',
        label: 'Green',
      },
      {
        color: '#7fffd4',
        label: 'Aquamarine',
      },
      {
        color: '#30D5C8',
        label: 'Turquoise',
      },
      {
        color: '#ADD8E6',
        label: 'Light blue',
      },
      {
        color: '#0000FF',
        label: 'Blue',
      },
      {
        color: '#A020F0',
        label: 'Purple',
      },
    ],
  },
  fontColor: {
    colors: [
      {
        color: '#000000',
        label: 'Black',
      },
      {
        color: '#696969',
        label: 'Dim grey',
      },
      {
        color: '#808080',
        label: 'Grey',
      },
      {
        color: '#D3D3D3',
        label: 'Light grey',
      },
      {
        color: '#FFFFFF',
        label: 'White',
        hasBorder: true,
      },
      {
        color: '#FF0000',
        label: 'Red',
      },
      {
        color: '#FFA500',
        label: 'Orange',
      },
      {
        color: '#FFFF00',
        label: 'Yellow',
      },
      {
        color: '#90EE90',
        label: 'Light green',
      },
      {
        color: '#00FF00',
        label: 'Green',
      },
      {
        color: '#7fffd4',
        label: 'Aquamarine',
      },
      {
        color: '#30D5C8',
        label: 'Turquoise',
      },
      {
        color: '#ADD8E6',
        label: 'Light blue',
      },
      {
        color: '#0000FF',
        label: 'Blue',
      },
      {
        color: '#A020F0',
        label: 'Purple',
      },
    ],
  },
};

export default Editor;
