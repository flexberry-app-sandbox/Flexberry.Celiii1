import { Serializer as СписокАнкетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-celiii-список-анкет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокАнкетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
