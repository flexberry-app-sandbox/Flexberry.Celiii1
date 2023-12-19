import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегСотрудEnum from '../enums/i-i-s-celiii-катег-сотруд';

export default FlexberryEnum.extend({
  enum: КатегСотрудEnum,
  sourceType: 'IIS.Celiii.КатегСотруд'
});
