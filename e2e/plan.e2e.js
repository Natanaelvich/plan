describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Your Plan'))).toBeVisible();
  });

  it('should be able change plan', async () => {
    await element(by.id('option-premium')).tap();
    await element(by.text('Basic')).tap();
  });

  it('should be able send email confirmation', async () => {
    await element(by.id('input-email')).typeText('taelima1997@gmail.com');
    await element(by.id('keyboard')).tap();
    await element(by.id('button-subscribe')).tap();
  });
});
