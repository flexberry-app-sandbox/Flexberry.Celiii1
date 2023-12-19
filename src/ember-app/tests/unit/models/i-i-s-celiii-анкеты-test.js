import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-celiii-анкеты', 'Unit | Model | i-i-s-celiii-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
