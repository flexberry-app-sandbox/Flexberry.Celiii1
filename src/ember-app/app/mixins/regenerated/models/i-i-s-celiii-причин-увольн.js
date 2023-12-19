import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  специалист: DS.belongsTo('i-i-s-celiii-специалист', { inverse: null, async: false }),
  список: DS.hasMany('i-i-s-celiii-список-анкет', { inverse: 'причинУвольн', async: false }),
  рекомендации: DS.hasMany('i-i-s-celiii-рекомендац', { inverse: 'причинУвольн', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-celiii-причин-увольн.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-celiii-причин-увольн.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-celiii-причин-увольн.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-celiii-причин-увольн.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинУвольнE', 'i-i-s-celiii-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    специалист: belongsTo('i-i-s-celiii-специалист', 'ФИО', {

    }, { index: 1, displayMemberPath: 'фИО' }),
    рекомендации: hasMany('i-i-s-celiii-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    }),
    список: hasMany('i-i-s-celiii-список-анкет', 'Список анкет', {
      анкеты: belongsTo('i-i-s-celiii-анкеты', 'Номер', {
        главнПричин: attr('Причина', { index: 1 }),
        относКатСотр: attr('Категория сотрудника', { index: 2 }),
        коммент: attr('Комментарий', { index: 3 })
      }, { index: 0, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('ПричинУвольнL', 'i-i-s-celiii-причин-увольн', {
    датаЗаполн: attr('Дата заполн', { index: 0 })
  });
};
