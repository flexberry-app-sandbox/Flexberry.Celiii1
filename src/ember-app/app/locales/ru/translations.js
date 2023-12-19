import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Celiii',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Celiii',
          title: 'Celiii'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
