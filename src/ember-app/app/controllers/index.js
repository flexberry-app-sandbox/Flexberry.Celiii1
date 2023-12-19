import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.celiii.caption'),
          title: i18n.t('forms.application.sitemap.celiii.title'),
          children: [{
            link: 'i-i-s-celiii-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-причин-увольн-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-celiii-анкеты-l',
            caption: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-анкеты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-celiii-специалист-l',
            caption: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.celiii.i-i-s-celiii-специалист-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})