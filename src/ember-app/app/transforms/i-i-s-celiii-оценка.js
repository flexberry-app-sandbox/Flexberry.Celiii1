import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОценкаEnum from '../enums/i-i-s-celiii-оценка';

export default FlexberryEnum.extend({
  enum: ОценкаEnum,
  sourceType: 'IIS.Celiii.Оценка'
});
