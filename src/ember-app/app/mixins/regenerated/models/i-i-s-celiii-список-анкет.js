import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  анкеты: DS.belongsTo('i-i-s-celiii-анкеты', { inverse: null, async: false }),
  причинУвольн: DS.belongsTo('i-i-s-celiii-причин-увольн', { inverse: 'список', async: false })
});

export let ValidationRules = {
  анкеты: {
    descriptionKey: 'models.i-i-s-celiii-список-анкет.validations.анкеты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причинУвольн: {
    descriptionKey: 'models.i-i-s-celiii-список-анкет.validations.причинУвольн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокАнкетE', 'i-i-s-celiii-список-анкет', {
    анкеты: belongsTo('i-i-s-celiii-анкеты', 'Номер', {
      главнПричин: attr('Причина', { index: 1 }),
      относКатСотр: attr('Категория сотрудника', { index: 2 }),
      коммент: attr('Комментарий', { index: 3 })
    }, { index: 0, displayMemberPath: 'номер' })
  });
};
