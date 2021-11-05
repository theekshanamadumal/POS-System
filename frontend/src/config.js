const URL = {}


URL.GoogleMapsAPI = 'AIzaSyBNQsYuKSBIV1GWz8O3t0HKjMkGD_k5fsM';

/////////////////////// react app //////////////////////////


/////////////////////// rest api //////////////////////////


URL.main="http://localhost:3001";

URL.sellerLocation = URL.main+ "/management/sellerLocation";
URL.invoice = URL.main+ "/management/invoice";

URL.signin = "/api/auth/signin";
URL.signup = "/api/auth/signin";
URL.signout = "/api/auth/signout";


URL.mainpage = "/";
URL.signinpage = "/login";


URL.management = "/management";


URL.products = "/management/products";
URL.addProduct = "/management/products/addProduct";
URL.productCategory = "/management/productCategory";
URL.addProductCategory ="/management/products/addProductCategory";
URL.productComp ="/management/product/";
URL.updateProduct="/management/updateProduct/";

URL.routes="/management/routes" ;
URL.addRoute="/management/routes/addroute";
URL.addSalesRoute="/management/addSalesRoute";
URL.salesRouteComp="/management/salesRoute/";
URL.salesRoutes="/management/salesRoutes";
URL.updateSaleRoute="/management/updateSalesRoute/";
URL.lastSales="/management/route/lastSales";

URL.salesperson="/management/salesperson";
URL.addSalesperson="/management/addSalesperson";
URL.updateSalesperson="/management/updateSalesperson/";
URL.salespersonCount="/management/salespersonCount/";

URL.shops="/management/shops";
URL.shopComp="/management/shop/";
URL.addShops="/management/shops/addShop";
URL.updateShop="/management/updateShop/";
URL.shopsCount="/management/shopsCount/";

URL.tasks="/management/tasks";
URL.addDailyTarget="/management/adddailyTasks";

URL.itAdmin="/itAdmin";
URL.user="/itAdmin/user";
URL.addUser="/itAdmin/addUser";
URL.editUser="/itAdmin/editUser/";
URL.managerCount="/itAdmin/manager/count";

URL.analytics="/management/analytics";
URL.categoryAnalytics="/management/analytics/category";
URL.salesAnalytics="/management/analytics/sales";
URL.sellersAnalytics="/management/analytics/sellers";
URL.sales="management/analytics#sales";
URL.analyticsSalesperson="management/analytics#salesperson";
URL.analyticsCategory="management/analytics#category";

URL.orders="/management/orders";
URL.orderComp="/management/orders/";

URL.dailyTasks="/management/dailyTasks";

module.exports = URL;
