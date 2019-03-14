import { storiesOf } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { LayoutComponent } from "../app/layout/layout.component";
import { MatDividerModule } from "@angular/material";

import { NavigationComponent } from "../app/menu/navigation/navigation.component";

storiesOf("Layout", module).add("Menu Navigation", () => ({
  component: NavigationComponent,
  props: {},
  moduleMetadata: {
    imports: [MatDividerModule]
  }
}));
