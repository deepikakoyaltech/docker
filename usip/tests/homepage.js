import { Selector } from "testcafe";
fixture`Test structure`
    .page`https://myuat.usipcom.com/login`
    .skipJsErrors()
    .beforeEach(async (t) => {
        await t.maximizeWindow();
      });

    const LoginUsipPortal = async (t) => {
    await t.wait(2000);
    const username = Selector('input').withAttribute('name','email');
    await t.typeText(username,'SuperAdmin')
    const password = Selector('input').withAttribute('name','password');
    await t.typeText(password,'admin123')
    const submit = Selector('button').withAttribute('type','submit');
    await t.click(submit);
    await t.wait(1000);
      };
      const Dashboard = async (t) => {
        const Dashboard =  Selector('a').withExactText('Dashboard');
        await t.setNativeDialogHandler(() => true);
        await t.click(Dashboard);
          };
test('Login Test for USIP Portal', async t => {
    await LoginUsipPortal(t);
    // const DashboardHeading =  Selector('div').withExactText('Hi, SuperAdmin, welcome to your account dashboard!');text-xl pb-4
    const DashboardHeading =  Selector('.text-xl.pb-4').textContent;
    await t.expect(DashboardHeading).eql('Hi, SuperAdmin, welcome to your account dashboard!')
});