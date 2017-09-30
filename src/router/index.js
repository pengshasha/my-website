const INDEX = r => require.ensure([], () => r(require('../pages/index')), 'index');


export default [{
  path: '/',
  name: 'index',
  component: INDEX
}]
