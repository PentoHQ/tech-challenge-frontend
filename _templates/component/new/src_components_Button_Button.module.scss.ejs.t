---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.module.scss
---
@import 'common.scss';
@import 'colors.scss';

.wrapper {
  display: flex;
  font-family: $primaryFont;
  font-weight: $mediumFontWeight;
  font: $text14Regular;
}

.primary {
  color: $primary90;
}
.secondary {
  color: $grey70;
}
.success {
  color: $success70;
}
.danger {
  color: $danger90;
}
