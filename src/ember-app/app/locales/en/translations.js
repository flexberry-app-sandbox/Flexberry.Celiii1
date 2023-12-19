import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCeliiiАнкетыLForm from './forms/i-i-s-celiii-анкеты-l';
import IISCeliiiПричинУвольнLForm from './forms/i-i-s-celiii-причин-увольн-l';
import IISCeliiiСпециалистLForm from './forms/i-i-s-celiii-специалист-l';
import IISCeliiiАнкетыEForm from './forms/i-i-s-celiii-анкеты-e';
import IISCeliiiПричинУвольнEForm from './forms/i-i-s-celiii-причин-увольн-e';
import IISCeliiiСпециалистEForm from './forms/i-i-s-celiii-специалист-e';
import IISCeliiiАнкетыModel from './models/i-i-s-celiii-анкеты';
import IISCeliiiПричинУвольнModel from './models/i-i-s-celiii-причин-увольн';
import IISCeliiiРекомендацModel from './models/i-i-s-celiii-рекомендац';
import IISCeliiiСпециалистModel from './models/i-i-s-celiii-специалист';
import IISCeliiiСписокАнкетModel from './models/i-i-s-celiii-список-анкет';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-celiii-анкеты': IISCeliiiАнкетыModel,
    'i-i-s-celiii-причин-увольн': IISCeliiiПричинУвольнModel,
    'i-i-s-celiii-рекомендац': IISCeliiiРекомендацModel,
    'i-i-s-celiii-специалист': IISCeliiiСпециалистModel,
    'i-i-s-celiii-список-анкет': IISCeliiiСписокАнкетModel
  },

  'application-name': 'Celiii',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Celiii',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Celiii',
          title: 'Celiii'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        celiii: {
          caption: 'Celiii',
          title: 'Celiii',
          'i-i-s-celiii-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          },
          'i-i-s-celiii-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-celiii-специалист-l': {
            caption: 'Специалист',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-celiii-анкеты-l': IISCeliiiАнкетыLForm,
    'i-i-s-celiii-причин-увольн-l': IISCeliiiПричинУвольнLForm,
    'i-i-s-celiii-специалист-l': IISCeliiiСпециалистLForm,
    'i-i-s-celiii-анкеты-e': IISCeliiiАнкетыEForm,
    'i-i-s-celiii-причин-увольн-e': IISCeliiiПричинУвольнEForm,
    'i-i-s-celiii-специалист-e': IISCeliiiСпециалистEForm
  },

});

export default translations;
