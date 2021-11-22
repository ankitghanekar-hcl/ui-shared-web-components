const BASE_URL = 'https://wFE4AE5CF.api.esales.apptus.cloud/api/v2/panels';
const NAVIGATION_ENDPOINT = '/navigation-page';
const SORT_BY = 'relevance';
const CATEGORY_TREE = 'categories_AVONREP_EN-GB';
const ROOT_CATEGORY = "categories_AVONREP_EN-GB:'root'";
const ESALES_MARKET = 'AVONREP_EN-GB';
const ESALES_CUSTOMER_KEY = '029f174e-1e87-4786-805e-30b225bc6932';
const ESALES_SESSION_KEY = 'd2cab655-faae-458e-bbcd-328e51a0128c';

/**
 * Apptus Service class
 * @class ApptusService
 */

class ApptusService {
  /**
   * Retrieves Mega Menu from Apptus Service.
   * @async
   * @method
   * @param {String} category_tree - category tree
   * @param {String} root_category - root category
   * @param {String} sort_by - sortBy
   * @param {String} eSalesMarket - eSales Market
   * @param {String} eSalesCustomerKey - eSales customer key
   * @param {String} eSalesSessionKey - eSales session key
   * @returns {data} data object
   *
   */

  static getNavigation = async ({
    category_tree = CATEGORY_TREE,
    root_category = ROOT_CATEGORY,
    sort_by = SORT_BY,
    eSalesMarket = ESALES_MARKET,
    eSalesCustomerKey = ESALES_CUSTOMER_KEY,
    eSalesSessionKey = ESALES_SESSION_KEY,
  } = {}) => {
    const apiUrl = BASE_URL + NAVIGATION_ENDPOINT;

    const params = new URLSearchParams({
      sort_by,
      root_category,
      category_tree,
      'esales.market': eSalesMarket,
      'esales.customerKey': eSalesCustomerKey,
      'esales.sessionKey': eSalesSessionKey,
      'include-empty-categories': 'false',
    });

    try {
      const res = await fetch(`${apiUrl}?${params}`);
      return await res.json();
    } catch (e) {
      console.error('ApptusService.getNavigation() error:', e);
      return e;
    }
  };
}

export default ApptusService;
