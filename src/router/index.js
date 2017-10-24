const INDEX = r => require.ensure([], () => r(require('../pages/index')), 'index');
const DETAIL = r => require.ensure([], () => r(require('../pages/detail')), 'detail');
const DATA_COUNT = r => require.ensure([], () => r(require('../pages/dataCount')), 'detail');


export default [{
  path: '/',
  redirect: '/index'
},
  {
  path: '/index',
  name: 'index',
  component: INDEX
},{
  path: '/detail',
  name: 'detail',
  component: DETAIL,
  children:[{
      path:'',
    redirect: 'dataCount'
    },{
      path: 'dataCount',
      name: 'dataCount',
      component:DATA_COUNT
  },{
      path: 'dataFlow',
      name: 'dataFlow',
      component:DATA_COUNT
  },{
      path: 'dataForecast',
      name: 'dataForecast',
      component:DATA_COUNT
  },{
      path: 'dataRelease',
      name: 'dataRelease',
      component:DATA_COUNT
  }]
}]
