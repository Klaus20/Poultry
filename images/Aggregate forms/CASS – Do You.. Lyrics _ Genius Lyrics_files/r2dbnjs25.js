



/* ControlTag Loader for Genius a0c6183b-1145-4a45-b723-f506ee164945 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"r2dbnjs25","context_terms":[],"publisher":{"name":"Genius","active":true,"uuid":"a0c6183b-1145-4a45-b723-f506ee164945","version_bucket":"stable","id":2595},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"genius"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/a0c6183b-1145-4a45-b723-f506ee164945","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/a0c6183b-1145-4a45-b723-f506ee164945","consent_set":"https://consumer.krxd.net/consent/set/a0c6183b-1145-4a45-b723-f506ee164945","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/a0c6183b-1145-4a45-b723-f506ee164945","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Genius","cap":255,"id":1655520,"organization_id":2595,"uid":"r2dbnjs25"},"tags":[{"id":32029,"name":"DTC","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n  \n   \tKrux('scrape',{'user_attr_email_sha256': {dataLayer : 'user.hashed_email' }} );\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":32070,"name":"DTC - DataLayer whitelist","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, normalizeName, omitKeys, optimizeNames, pageAttr, prefix,\n        toSet, trim, userAttr, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.js_global', 'dataLayer');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('type,artists,genres'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    prefix = 'undefined_';\n    keepCase = 'false' === 'true';\n    omitKeys = 'user'.split(',');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Function to standardise the attribute names */\n    normalizeName = function(name, optimize) {\n        if (optimize == null) {\n            optimize = false;\n        }\n        if (keepCase) {\n            return name;\n        }\n        return (\"\" + name).replace(/([A-Z])([A-Z]+)/g, function(full, first, rest) {\n            if (optimize === true) {\n                return \"\" + first + (rest.toLowerCase());\n            }\n            return \"\" + full;\n        }).replace(/_*([A-Z])/g, '_$1').replace(/^_/, '').toLowerCase();\n    };\n\n    /* Creates a pattern/replacement config for dataLayer tool to clean up names */\n    optimizeNames = function(names) {\n        var config, i, len, name;\n        config = [{\n            pattern: /(\\.)_/,\n            replacement: '$1'\n        }];\n        for (i = 0, len = names.length; i < len; i++) {\n            name = names[i];\n            config.push({\n                pattern: normalizeName(name),\n                replacement: normalizeName(name, true)\n            });\n        }\n        if (!prefix.match(/^_$|null|undefined|false/)) {\n            config.push({\n                pattern: /((?:page|user)_attr_)/,\n                replacement: \"$1\" + prefix\n            });\n        }\n        return config;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: _.without(omitKeys.concat([/gtm\\./, /sessionid/i,\n            /\\.phpsessid$/i, /\\.sid$/i, /\\.zenid$/i,\n            /\\.requestid$/i\n        ]), ''),\n        omitValues: [/.*@.*(?:\\..*)+/, /gtm\\./, /^(https?:)?\\/\\/[^\\/]+/,\n            /^\\/[^\\/]+/, /.{255}/\n        ],\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        convertAttrNames: !keepCase ? optimizeNames(allAttr) : void 0\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (\n            normalizeName(name, true)) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.09a5e91f12425e5066daa6d1e2a6a6c9', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
