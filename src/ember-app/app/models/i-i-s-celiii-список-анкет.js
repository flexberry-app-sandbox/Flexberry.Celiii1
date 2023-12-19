import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокАнкетMixin
} from '../mixins/regenerated/models/i-i-s-celiii-список-анкет';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокАнкетMixin, Validations, {
});

defineProjections(Model);

export default Model;
