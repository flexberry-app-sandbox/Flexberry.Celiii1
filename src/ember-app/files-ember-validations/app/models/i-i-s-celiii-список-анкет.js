import {
  defineNamespace,
  defineProjections,
  Model as СписокАнкетMixin
} from '../mixins/regenerated/models/i-i-s-celiii-список-анкет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокАнкетMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
