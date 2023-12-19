import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-celiii-причин-увольн', 'Unit | Serializer | i-i-s-celiii-причин-увольн', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-celiii-причин-увольн',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-celiii-возраст',
    'transform:i-i-s-celiii-катег-сотруд',
    'transform:i-i-s-celiii-оценка',
    'transform:i-i-s-celiii-стаж',
    'transform:i-i-s-celiii-факторы',

    'model:i-i-s-celiii-анкеты',
    'model:i-i-s-celiii-причин-увольн',
    'model:i-i-s-celiii-рекомендац',
    'model:i-i-s-celiii-специалист',
    'model:i-i-s-celiii-список-анкет',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
