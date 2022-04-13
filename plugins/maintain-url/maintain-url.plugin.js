(function () {

  function load() {
    window.PEX.actions$.ofType('[Conference] Connect Success').subscribe( (action) => {
      const params = new URLSearchParams(window.PEX.conferenceQueryParams);
      const url = window.location + '?' + params.toString();
      history.pushState({}, '', url);
    });
  }

  function unload() {
    console.log('Maintain URL Plugin', 'Unloaded');
  }

  PEX.pluginAPI.registerPlugin({
    id: 'maintain-url-plugin-1.0',
    load: load,
    unload: unload
  });

})();