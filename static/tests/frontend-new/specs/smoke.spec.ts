import {expect, test} from '@playwright/test';
import {getPadBody, goToNewPad} from 'ep_etherpad-lite/tests/frontend-new/helper/padHelper';

test.beforeEach(async ({page}) => {
  await goToNewPad(page);
});

test.describe('ep_print', () => {
  test('pad loads with plugin installed', async ({page}) => {
    const padBody = await getPadBody(page);
    await expect(padBody).toBeVisible();
  });

  test('print button exposes a localization key', async ({page}) => {
    const printButton = page.locator('#printButton a.ep_print');
    await expect(printButton).toHaveAttribute('data-l10n-id', 'ep_print.toolbar.print');
  });
});
