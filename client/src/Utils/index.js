import injectTapEventPlugin from 'react-tap-event-plugin';



/**
 * Utils - set of Utilites like TapEventsPlugin injector
 * and google ad works helpers
 */
class Utils {


  /**
   * injectTapEvents - Description
   * Needed for Material UI onTouchTap
   * http://stackoverflow.com/a/34015469/988941
   */
  injectTapEvents(){
    injectTapEventPlugin();
    console.info(`TapEventPlugin injected`); // eslint-disable-line no-console
  }
}

export default new Utils();
