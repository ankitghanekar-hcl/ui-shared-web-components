import { r as registerInstance, h } from './index-304a2a43.js';

var commonjsGlobal =
  typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
  return (
    (module = {
      path: basedir,
      exports: {},
      require: function (path, base) {
        return commonjsRequire(path, base === undefined || base === null ? module.path : base);
      },
    }),
    fn(module, module.exports),
    module.exports
  );
}

function getDefaultExportFromNamespaceIfPresent(n) {
  return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed(n) {
  return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var a = Object.defineProperty({}, '__esModule', { value: true });
  Object.keys(n).forEach(function (k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(
      a,
      k,
      d.get
        ? d
        : {
            enumerable: true,
            get: function () {
              return n[k];
            },
          },
    );
  });
  return a;
}

function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

('use strict');
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative()
  ? Object.assign
  : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty$1.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

var react_production_min$1 = createCommonjsModule(function (module, exports) {
  /** @license React v17.0.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  'use strict';
  var n = 60103,
    p = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q = 60109,
    r = 60110,
    t = 60112;
  exports.Suspense = 60113;
  var u = 60115,
    v = 60116;
  if ('function' === typeof Symbol && Symbol.for) {
    var w = Symbol.for;
    n = w('react.element');
    p = w('react.portal');
    exports.Fragment = w('react.fragment');
    exports.StrictMode = w('react.strict_mode');
    exports.Profiler = w('react.profiler');
    q = w('react.provider');
    r = w('react.context');
    t = w('react.forward_ref');
    exports.Suspense = w('react.suspense');
    u = w('react.memo');
    v = w('react.lazy');
  }
  var x = 'function' === typeof Symbol && Symbol.iterator;
  function y(a) {
    if (null === a || 'object' !== typeof a) return null;
    a = (x && a[x]) || a['@@iterator'];
    return 'function' === typeof a ? a : null;
  }
  function z(a) {
    for (var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a, c = 1; c < arguments.length; c++) b += '&args[]=' + encodeURIComponent(arguments[c]);
    return 'Minified React error #' + a + '; visit ' + b + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function (a, b) {
    if ('object' !== typeof a && 'function' !== typeof a && null != a) throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, 'setState');
  };
  C.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
  };
  function D() {}
  D.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B;
    this.updater = c || A;
  }
  var F = (E.prototype = new D());
  F.constructor = E;
  objectAssign(F, C.prototype);
  F.isPureReactComponent = !0;
  var G = { current: null },
    H = Object.prototype.hasOwnProperty,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(a, b, c) {
    var e,
      d = {},
      k = null,
      h = null;
    if (null != b) for (e in (void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = '' + b.key), b)) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (1 === g) d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps) for (e in ((g = a.defaultProps), g)) void 0 === d[e] && (d[e] = g[e]);
    return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
  }
  function K(a, b) {
    return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function L(a) {
    return 'object' === typeof a && null !== a && a.$$typeof === n;
  }
  function escape(a) {
    var b = { '=': '=0', ':': '=2' };
    return (
      '$' +
      a.replace(/[=:]/g, function (a) {
        return b[a];
      })
    );
  }
  var M = /\/+/g;
  function N(a, b) {
    return 'object' === typeof a && null !== a && null != a.key ? escape('' + a.key) : b.toString(36);
  }
  function O(a, b, c, e, d) {
    var k = typeof a;
    if ('undefined' === k || 'boolean' === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else
      switch (k) {
        case 'string':
        case 'number':
          h = !0;
          break;
        case 'object':
          switch (a.$$typeof) {
            case n:
            case p:
              h = !0;
          }
      }
    if (h)
      return (
        (h = a),
        (d = d(h)),
        (a = '' === e ? '.' + N(h, 0) : e),
        Array.isArray(d)
          ? ((c = ''),
            null != a && (c = a.replace(M, '$&/') + '/'),
            O(d, b, c, '', function (a) {
              return a;
            }))
          : null != d && (L(d) && (d = K(d, c + (!d.key || (h && h.key === d.key) ? '' : ('' + d.key).replace(M, '$&/') + '/') + a)), b.push(d)),
        1
      );
    h = 0;
    e = '' === e ? '.' : e + ':';
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N(k, g);
        h += O(k, b, c, f, d);
      }
    else if (((f = y(a)), 'function' === typeof f)) for (a = f.call(a), g = 0; !(k = a.next()).done; ) (k = k.value), (f = e + N(k, g++)), (h += O(k, b, c, f, d));
    else if ('object' === k) throw ((b = '' + a), Error(z(31, '[object Object]' === b ? 'object with keys {' + Object.keys(a).join(', ') + '}' : b)));
    return h;
  }
  function P(a, b, c) {
    if (null == a) return a;
    var e = [],
      d = 0;
    O(a, e, '', '', function (a) {
      return b.call(c, a, d++);
    });
    return e;
  }
  function Q(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(
        function (b) {
          0 === a._status && ((b = b.default), (a._status = 1), (a._result = b));
        },
        function (b) {
          0 === a._status && ((a._status = 2), (a._result = b));
        },
      );
    }
    if (1 === a._status) return a._result;
    throw a._result;
  }
  var R = { current: null };
  function S() {
    var a = R.current;
    if (null === a) throw Error(z(321));
    return a;
  }
  var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: !1 }, assign: objectAssign };
  exports.Children = {
    map: P,
    forEach: function (a, b, c) {
      P(
        a,
        function () {
          b.apply(this, arguments);
        },
        c,
      );
    },
    count: function (a) {
      var b = 0;
      P(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return (
        P(a, function (a) {
          return a;
        }) || []
      );
    },
    only: function (a) {
      if (!L(a)) throw Error(z(143));
      return a;
    },
  };
  exports.Component = C;
  exports.PureComponent = E;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
  exports.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(z(267, a));
    var e = objectAssign({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && ((k = b.ref), (h = G.current));
      void 0 !== b.key && (d = '' + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      e.children = g;
    }
    return { $$typeof: n, type: a.type, key: d, ref: k, props: e, _owner: h };
  };
  exports.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
    a.Provider = { $$typeof: q, _context: a };
    return (a.Consumer = a);
  };
  exports.createElement = J;
  exports.createFactory = function (a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports.createRef = function () {
    return { current: null };
  };
  exports.forwardRef = function (a) {
    return { $$typeof: t, render: a };
  };
  exports.isValidElement = L;
  exports.lazy = function (a) {
    return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
  };
  exports.memo = function (a, b) {
    return { $$typeof: u, type: a, compare: void 0 === b ? null : b };
  };
  exports.useCallback = function (a, b) {
    return S().useCallback(a, b);
  };
  exports.useContext = function (a, b) {
    return S().useContext(a, b);
  };
  exports.useDebugValue = function () {};
  exports.useEffect = function (a, b) {
    return S().useEffect(a, b);
  };
  exports.useImperativeHandle = function (a, b, c) {
    return S().useImperativeHandle(a, b, c);
  };
  exports.useLayoutEffect = function (a, b) {
    return S().useLayoutEffect(a, b);
  };
  exports.useMemo = function (a, b) {
    return S().useMemo(a, b);
  };
  exports.useReducer = function (a, b, c) {
    return S().useReducer(a, b, c);
  };
  exports.useRef = function (a) {
    return S().useRef(a);
  };
  exports.useState = function (a) {
    return S().useState(a);
  };
  exports.version = '17.0.2';
});

var react_development$1 = createCommonjsModule(function (module, exports) {
  /** @license React v17.0.2
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';

  if ('development' !== 'production') {
    (function () {
      'use strict';

      var _assign = objectAssign;

      // TODO: this is special because it gets imported during build.
      var ReactVersion = '17.0.2';

      // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      exports.Fragment = 0xeacb;
      exports.StrictMode = 0xeacc;
      exports.Profiler = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      exports.Suspense = 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
      var REACT_MEMO_TYPE = 0xead3;
      var REACT_LAZY_TYPE = 0xead4;
      var REACT_BLOCK_TYPE = 0xead9;
      var REACT_SERVER_BLOCK_TYPE = 0xeada;
      var REACT_FUNDAMENTAL_TYPE = 0xead5;
      var REACT_SCOPE_TYPE = 0xead7;
      var REACT_OPAQUE_ID_TYPE = 0xeae0;
      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
      var REACT_OFFSCREEN_TYPE = 0xeae2;
      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

      if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        exports.StrictMode = symbolFor('react.strict_mode');
        exports.Profiler = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        exports.Suspense = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
      }

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null;
        }

        var maybeIterator = (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      /**
       * Keeps track of the current dispatcher.
       */
      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */
      var ReactCurrentBatchConfig = {
        transition: 0,
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      var ReactDebugCurrentFrame = {};
      var currentExtraStackFrame = null;
      function setExtraStackFrame(stack) {
        {
          currentExtraStackFrame = stack;
        }
      }

      {
        ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
          {
            currentExtraStackFrame = stack;
          }
        }; // Stack implementation injected by the current renderer.

        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ''; // Add an extra top frame while an element is being validated

          if (currentExtraStackFrame) {
            stack += currentExtraStackFrame;
          } // Delegate to the injected renderer-specific implementation

          var impl = ReactDebugCurrentFrame.getCurrentStack;

          if (impl) {
            stack += impl() || '';
          }

          return stack;
        };
      }

      /**
       * Used by act() to track whether you're inside an act() scope.
       */
      var IsSomeRendererActing = {
        current: false,
      };

      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign,
      };

      {
        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
      }

      // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = (_constructor && (_constructor.displayName || _constructor.name)) || 'ReactClass';
          var warningKey = componentName + '.' + callerName;

          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }

          error(
            "Can't call %s on a component that is not yet mounted. " +
              'This is a no-op, but it might indicate a bug in your application. ' +
              'Instead, assign to `this.state` directly or define a `state = {};` ' +
              'class property with the desired state in the %s component.',
            callerName,
            componentName,
          );

          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */

      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        },
      };

      var emptyObject = {};

      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
          }
        }

        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */

      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */

      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
        };

        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

              return undefined;
            },
          });
        };

        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      function ComponentDummy() {}

      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);

      pureComponentPrototype.isPureReactComponent = true;

      // an immutable object with a single mutable value
      function createRef() {
        var refObject = {
          current: null,
        };

        {
          Object.seal(refObject);
        }

        return refObject;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
      }

      function getContextName(type) {
        return type.displayName || 'Context';
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case exports.Fragment:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case exports.Profiler:
            return 'Profiler';

          case exports.StrictMode:
            return 'StrictMode';

          case exports.Suspense:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + '.Consumer';

            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + '.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);

            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }

        return null;
      }

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true,
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;

              error(
                '%s: `key` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://reactjs.org/link/special-props)',
                displayName,
              );
            }
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;

              error(
                '%s: `ref` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://reactjs.org/link/special-props)',
                displayName,
              );
            }
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true,
        });
      }

      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error(
                'Component "%s" contains the string ref "%s". ' +
                  'Support for string refs will be removed in a future major release. ' +
                  'This case cannot be automatically converted to an arrow function. ' +
                  'We ask you to manually fix this case by using useRef() or createRef() instead. ' +
                  'Learn more about using refs safely here: ' +
                  'https://reactjs.org/link/strict-mode-string-ref',
                componentName,
                config.ref,
              );

              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function (type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner,
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false,
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self,
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source,
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */

      function createElement(type, config, children) {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;

            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }

          props.children = childArray;
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        {
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }

        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */

      function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) {
          {
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.');
          }
        }

        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted

        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          } // Remaining properties override existing props

          var defaultProps;

          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2',
        };
        var escapedString = key.replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });
        return '$' + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;

      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
      }
      /**
       * Generate a key string that identifies a element within a set.
       *
       * @param {*} element A element that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */

      function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) {
          // Explicit key
          return escape('' + element.key);
        } // Implicit key determined by the index in the set

        return index.toString(36);
      }

      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;

            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          var _child = children;
          var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows:

          var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

          if (Array.isArray(mappedChild)) {
            var escapedChildKey = '';

            if (childKey != null) {
              escapedChildKey = escapeUserProvidedKey(childKey) + '/';
            }

            mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    ? escapeUserProvidedKey('' + mappedChild.key) + '/'
                    : '') +
                  childKey,
              );
            }

            array.push(mappedChild);
          }

          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === 'function') {
            var iterableChildren = children;

            {
              // Warn about using Maps as children
              if (iteratorFn === iterableChildren.entries) {
                if (!didWarnAboutMaps) {
                  warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                }

                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(iterableChildren);
            var step;
            var ii = 0;

            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getElementKey(child, ii++);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else if (type === 'object') {
            var childrenString = '' + children;

            {
              {
                throw Error(
                  'Objects are not valid as a React child (found: ' +
                    (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) +
                    '). If you meant to render a collection of children, use an array instead.',
                );
              }
            }
          }
        }

        return subtreeCount;
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }

        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function (child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */

      function countChildren(children) {
        var n = 0;
        mapChildren(children, function () {
          n++; // Don't return anything
        });
        return n;
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments); // Don't return anything.
          },
          forEachContext,
        );
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */

      function toArray(children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */

      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error('React.Children.only expected to receive a single React element child.');
          }
        }

        return children;
      }

      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
              error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
            }
          }
        }

        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context,
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;

        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits,
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function () {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;

                  error(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?',
                  );
                }

                return context.Provider;
              },
              set: function (_Provider) {
                context.Provider = _Provider;
              },
            },
            _currentValue: {
              get: function () {
                return context._currentValue;
              },
              set: function (_currentValue) {
                context._currentValue = _currentValue;
              },
            },
            _currentValue2: {
              get: function () {
                return context._currentValue2;
              },
              set: function (_currentValue2) {
                context._currentValue2 = _currentValue2;
              },
            },
            _threadCount: {
              get: function () {
                return context._threadCount;
              },
              set: function (_threadCount) {
                context._threadCount = _threadCount;
              },
            },
            Consumer: {
              get: function () {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;

                  error(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?',
                  );
                }

                return context.Consumer;
              },
            },
            displayName: {
              get: function () {
                return context.displayName;
              },
              set: function (displayName) {
                if (!hasWarnedAboutDisplayNameOnConsumer) {
                  warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

                  hasWarnedAboutDisplayNameOnConsumer = true;
                }
              },
            },
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }

        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }

        return context;
      }

      var Uninitialized = -1;
      var Pending = 0;
      var Resolved = 1;
      var Rejected = 2;

      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result;
          var thenable = ctor(); // Transition to the next state.

          var pending = payload;
          pending._status = Pending;
          pending._result = thenable;
          thenable.then(
            function (moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;

                {
                  if (defaultExport === undefined) {
                    error(
                      'lazy: Expected the result of a dynamic import() call. ' +
                        'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                        'const MyComponent = lazy(() => imp' +
                        "ort('./MyComponent'))",
                      moduleObject,
                    );
                  }
                } // Transition to the next state.

                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            },
            function (error) {
              if (payload._status === Pending) {
                // Transition to the next state.
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error;
              }
            },
          );
        }

        if (payload._status === Resolved) {
          return payload._result;
        } else {
          throw payload._result;
        }
      }

      function lazy(ctor) {
        var payload = {
          // We use these fields to store the result.
          _status: -1,
          _result: ctor,
        };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer,
        };

        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes; // $FlowFixMe

          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function () {
                return defaultProps;
              },
              set: function (newDefaultProps) {
                error(
                  'React.lazy(...): It is not supported to assign `defaultProps` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.',
                );

                defaultProps = newDefaultProps; // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true,
                });
              },
            },
            propTypes: {
              configurable: true,
              get: function () {
                return propTypes;
              },
              set: function (newPropTypes) {
                error(
                  'React.lazy(...): It is not supported to assign `propTypes` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.',
                );

                propTypes = newPropTypes; // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true,
                });
              },
            },
          });
        }

        return lazyType;
      }

      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
          } else if (typeof render !== 'function') {
            error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error(
                'forwardRef render functions accept exactly two parameters: props and ref. %s',
                render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.',
              );
            }
          }

          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
            }
          }
        }

        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render,
        };

        {
          var ownName;
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
              return ownName;
            },
            set: function (name) {
              ownName = name;

              if (render.displayName == null) {
                render.displayName = name;
              }
            },
          });
        }

        return elementType;
      }

      // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

        if (
          type === exports.Fragment ||
          type === exports.Profiler ||
          type === REACT_DEBUG_TRACING_MODE_TYPE ||
          type === exports.StrictMode ||
          type === exports.Suspense ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          type === REACT_LEGACY_HIDDEN_TYPE ||
          enableScopeAPI
        ) {
          return true;
        }

        if (typeof type === 'object' && type !== null) {
          if (
            type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_PROVIDER_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
            type.$$typeof === REACT_BLOCK_TYPE ||
            type[0] === REACT_SERVER_BLOCK_TYPE
          ) {
            return true;
          }
        }

        return false;
      }

      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
          }
        }

        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare,
        };

        {
          var ownName;
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
              return ownName;
            },
            set: function (name) {
              ownName = name;

              if (type.displayName == null) {
                type.displayName = name;
              }
            },
          });
        }

        return elementType;
      }

      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;

        if (!(dispatcher !== null)) {
          {
            throw Error(
              'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.',
            );
          }
        }

        return dispatcher;
      }

      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();

        {
          if (unstable_observedBits !== undefined) {
            error(
              'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s',
              unstable_observedBits,
              typeof unstable_observedBits === 'number' && Array.isArray(arguments[2])
                ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks'
                : '',
            );
          } // TODO: add a more generic warning for invalid values.

          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error(
                'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' +
                  'removed in a future major release. Did you mean to call useContext(Context) instead?',
              );
            } else if (realContext.Provider === Context) {
              error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
            }
          }
        }

        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }

      // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;

      function disabledLog() {}

      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true,
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props,
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;

          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true,
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog,
              }),
              info: _assign({}, props, {
                value: prevInfo,
              }),
              warn: _assign({}, props, {
                value: prevWarn,
              }),
              error: _assign({}, props, {
                value: prevError,
              }),
              group: _assign({}, props, {
                value: prevGroup,
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed,
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd,
              }),
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
          }
        }
      }

      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = (match && match[1]) || '';
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.

          return '\n' + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;

      {
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }

      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return '';
        }

        {
          var frame = componentFrameCache.get(fn);

          if (frame !== undefined) {
            return frame;
          }
        }

        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined;
        var previousDispatcher;

        {
          previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher$1.current = null;
          disableLogs();
        }

        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function () {
              throw Error();
            }; // $FlowFixMe

            Object.defineProperty(Fake.prototype, 'props', {
              set: function () {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error();
              },
            });

            if (typeof Reflect === 'object' && Reflect.construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }

              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }

              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }

            fn();
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n');
            var controlLines = control.stack.split('\n');
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;

            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--;
            }

            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--; // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame);
                        }
                      } // Return the line we found.

                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }

                break;
              }
            }
          }
        } finally {
          reentry = false;

          {
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
          }

          Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.

        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }

        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }

      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }

      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return '';
        }

        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }

        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type);
        }

        switch (type) {
          case exports.Suspense:
            return describeBuiltInComponentFrame('Suspense');

          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);

            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);

            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
          }
        }

        return '';
      }

      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }

      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(Object.prototype.hasOwnProperty);

          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  var err = Error(
                    (componentName || 'React class') +
                      ': ' +
                      location +
                      ' type `' +
                      typeSpecName +
                      '` is invalid; ' +
                      'it must be a function, usually from the `prop-types` package, but received `' +
                      typeof typeSpecs[typeSpecName] +
                      '`.' +
                      'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                  );
                  err.name = 'Invariant Violation';
                  throw err;
                }

                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (ex) {
                error$1 = ex;
              }

              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);

                error(
                  '%s: type specification of %s' +
                    ' `%s` is invalid; the type checker ' +
                    'function must return `null` or an `Error` but returned a %s. ' +
                    'You may have forgotten to pass an argument to the type checker ' +
                    'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                    'shape all require an argument).',
                  componentName || 'React class',
                  location,
                  typeSpecName,
                  typeof error$1,
                );

                setCurrentlyValidatingElement(null);
              }

              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);

                error('Failed %s type: %s', location, error$1.message);

                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }

      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
          } else {
            setExtraStackFrame(null);
          }
        }
      }

      var propTypesMisspellWarningShown;

      {
        propTypesMisspellWarningShown = false;
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }

      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }

      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }

        return '';
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = '\n\nCheck the top-level render call using <' + parentName + '>.';
          }
        }

        return info;
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
        }

        {
          setCurrentlyValidatingElement$1(element);

          error(
            'Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.',
            currentComponentErrorInfo,
            childOwner,
          );

          setCurrentlyValidatingElement$1(null);
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (
            typeof type === 'object' &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)
          ) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentName(type);

            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment);

              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

              setCurrentlyValidatingElement$1(null);
              break;
            }
          }

          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);

            error('Invalid attribute `ref` supplied to `React.Fragment`.');

            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || (typeof type === 'object' && type !== null && Object.keys(type).length === 0)) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendumForProps(props);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          {
            error(
              'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s',
              typeString,
              info,
            );
          }
        }

        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if (type === exports.Fragment) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
      var didWarnAboutDeprecatedCreateFactory = false;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;

        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;

            warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
          } // Legacy hook: remove it

          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

              Object.defineProperty(this, 'type', {
                value: type,
              });
              return type;
            },
          });
        }

        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);

        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }

        validatePropTypes(newElement);
        return newElement;
      }

      {
        try {
          var frozenObject = Object.freeze({});
          /* eslint-disable no-new */

          new Map([[frozenObject, null]]);
          new Set([frozenObject]);
          /* eslint-enable no-new */
        } catch (e) {}
      }

      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild,
      };

      exports.Children = Children;
      exports.Component = Component;
      exports.PureComponent = PureComponent;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports.cloneElement = cloneElement$1;
      exports.createContext = createContext;
      exports.createElement = createElement$1;
      exports.createFactory = createFactory;
      exports.createRef = createRef;
      exports.forwardRef = forwardRef;
      exports.isValidElement = isValidElement;
      exports.lazy = lazy;
      exports.memo = memo;
      exports.useCallback = useCallback;
      exports.useContext = useContext;
      exports.useDebugValue = useDebugValue;
      exports.useEffect = useEffect;
      exports.useImperativeHandle = useImperativeHandle;
      exports.useLayoutEffect = useLayoutEffect;
      exports.useMemo = useMemo;
      exports.useReducer = useReducer;
      exports.useRef = useRef;
      exports.useState = useState;
      exports.version = ReactVersion;
    })();
  }
});

var react$1 = createCommonjsModule(function (module) {
  'use strict';

  if ('development' === 'production') {
    module.exports = react_production_min$1;
  } else {
    module.exports = react_development$1;
  }
});

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = (module.exports =
    typeof window != 'undefined' && window.Math == Math
      ? window
      : typeof self != 'undefined' && self.Math == Math
      ? self
      : // eslint-disable-next-line no-new-func
        Function('return this')());
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = (module.exports = { version: '2.6.12' });
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return (
    Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      },
    }).a != 7
  );
});

var document$2 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$2) && _isObject(document$2.createElement);
var _domCreate = function (it) {
  return is ? document$2.createElement(it) : {};
};

var _ie8DomDefine =
  !_descriptors &&
  !_fails(function () {
    return (
      Object.defineProperty(_domCreate('div'), 'a', {
        get: function () {
          return 7;
        },
      }).a != 7
    );
  });

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject((val = fn.call(it)))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject((val = fn.call(it)))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject((val = fn.call(it)))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$2 = Object.defineProperty;

var f$7 = _descriptors
  ? Object.defineProperty
  : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine)
        try {
          return dP$2(O, P, Attributes);
        } catch (e) {
          /* empty */
        }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

var _objectDp = {
  f: f$7,
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value,
  };
};

var _hide = _descriptors
  ? function (object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    }
  : function (object, key, value) {
      object[key] = value;
      return object;
    };

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
  });
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return (typeof this == 'function' && this[SRC]) || _functionToString.call(this);
  });
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE$2 = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$2];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE$2] || (exports[PROTOTYPE$2] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString$1 = {}.toString;

var _cof = function (it) {
  return toString$1.call(it).slice(8, -1);
};

// 7.2.2 IsArray(argument)

var _isArray =
  Array.isArray ||
  function isArray(arg) {
    return _cof(arg) == 'Array';
  };

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor$1 = Math.floor;
var _toInteger = function (it) {
  return isNaN((it = +it)) ? 0 : (it > 0 ? floor$1 : ceil)(it);
};

// 7.1.15 ToLength

var min$2 = Math.min;
var _toLength = function (it) {
  return it > 0 ? min$2(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = (module.exports = function (name) {
    return store[name] || (store[name] = (USE_SYMBOL && Symbol[name]) || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  });

  $exports.store = store;
});

('use strict');
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (_isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

var _flattenIntoArray = flattenIntoArray;

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var SPECIES$3 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)

var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

('use strict');
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

_export(_export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = _toObject(this);
    var sourceLen, A;
    _aFunction(callbackfn);
    sourceLen = _toLength(O.length);
    A = _arraySpeciesCreate(O, 0);
    _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  },
});

_addToUnscopables('flatMap');

var es7_array_flatMap = {};

('use strict');

var _strictMethod = function (method, arg) {
  return (
    !!method &&
    _fails(function () {
      // eslint-disable-next-line no-useless-call
      arg
        ? method.call(
            null,
            function () {
              /* empty */
            },
            1,
          )
        : method.call(null);
    })
  );
};

('use strict');

var $sort = [].sort;
var test = [1, 2, 3];

_export(
  _export.P +
    _export.F *
      (_fails(function () {
        // IE8-
        test.sort(undefined);
      }) ||
        !_fails(function () {
          // V8 bug
          test.sort(null);
          // Old WebKit
        }) ||
        !_strictMethod($sort)),
  'Array',
  {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
    },
  },
);

var es6_array_sort = {};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo =
  Object.getPrototypeOf ||
  function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto$1 : null;
  };

var f$6 = {}.propertyIsEnumerable;

var _objectPie = {
  f: f$6,
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0)
  ? Object
  : function (it) {
      return _cof(it) == 'String' ? it.split('') : Object(it);
    };

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function (it) {
  return _iobject(_defined(it));
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$5 = _descriptors
  ? gOPD$1
  : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine)
        try {
          return gOPD$1(O, P);
        } catch (e) {
          /* empty */
        }
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };

var _objectGopd = {
  f: f$5,
};

('use strict');
// Forced replacement prototype accessors methods
var _objectForcedPam =
  _library ||
  !_fails(function () {
    var K = Math.random();
    // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call
    __defineSetter__.call(null, K, function () {
      /* empty */
    });
    delete _global[K];
  });

('use strict');

var getOwnPropertyDescriptor$1 = _objectGopd.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_descriptors &&
  _export(_export.P + _objectForcedPam, 'Object', {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = _toObject(this);
      var K = _toPrimitive(P, true);
      var D;
      do {
        if ((D = getOwnPropertyDescriptor$1(O, K))) return D.get;
      } while ((O = _objectGpo(O)));
    },
  });

var es7_object_lookupGetter = {};

('use strict');

var getOwnPropertyDescriptor = _objectGopd.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_descriptors &&
  _export(_export.P + _objectForcedPam, 'Object', {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = _toObject(this);
      var K = _toPrimitive(P, true);
      var D;
      do {
        if ((D = getOwnPropertyDescriptor(O, K))) return D.set;
      } while ((O = _objectGpo(O)));
    },
  });

var es7_object_lookupSetter = {};

// 7.3.20 SpeciesConstructor(O, defaultConstructor)

var SPECIES$2 = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
};

('use strict');
// 25.4.1.5 NewPromiseCapability(C)

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$4 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
  f: f$4,
};

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

// https://github.com/tc39/proposal-promise-finally
('use strict');

_export(_export.P + _export.R, 'Promise', {
  finally: function (onFinally) {
    var C = _speciesConstructor(this, _core.Promise || _global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction
        ? function (x) {
            return _promiseResolve(C, onFinally()).then(function () {
              return x;
            });
          }
        : onFinally,
      isFunction
        ? function (e) {
            return _promiseResolve(C, onFinally()).then(function () {
              throw e;
            });
          }
        : onFinally,
    );
  },
});

var es7_promise_finally = {};

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set:
    Object.setPrototypeOf ||
    ('__proto__' in {} // eslint-disable-line
      ? (function (test, buggy, set) {
          try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        })({}, false)
      : undefined),
  check: check,
};

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};

var max$1 = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max$1(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      }
    else
      for (; length > index; index++)
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
    return !IS_INCLUDES && -1;
  };
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i)
    if (_has(O, (key = names[i++]))) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$3 =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

var _objectGopn = {
  f: f$3,
};

// 7.2.8 IsRegExp(argument)

var MATCH = _wks('match');
var _isRegexp = function (it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

('use strict');
// 21.2.5.3 get RegExp.prototype.flags

var _flags = function () {
  var that = _anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

('use strict');

var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$1])
    _objectDp.f(C, SPECIES$1, {
      configurable: true,
      get: function () {
        return this;
      },
    });
};

var dP$1 = _objectDp.f;
var gOPN$2 = _objectGopn.f;

var $RegExp = _global.RegExp;
var Base = $RegExp;
var proto$1 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (
  _descriptors &&
  (!CORRECT_NEW ||
    _fails(function () {
      re2[_wks('match')] = false;
      // RegExp constructor can alter flags and IsRegExp works correct with @@match
      return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
    }))
) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = _isRegexp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU
      ? p
      : _inheritIfRequired(
          CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f),
          tiRE ? this : proto$1,
          $RegExp,
        );
  };
  var proxy = function (key) {
    key in $RegExp ||
      dP$1($RegExp, key, {
        configurable: true,
        get: function () {
          return Base[key];
        },
        set: function (it) {
          Base[key] = it;
        },
      });
  };
  for (var keys = gOPN$2(Base), i$1 = 0; keys.length > i$1; ) proxy(keys[i$1++]);
  proto$1.constructor = $RegExp;
  $RegExp.prototype = proto$1;
  _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

var es6_regexp_constructor = {};

// 21.2.5.3 get RegExp.prototype.flags()
if (_descriptors && /./g.flags != 'g')
  _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags,
  });

var es6_regexp_flags = {};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING
        ? s.charAt(i)
        : a
      : TO_STRING
      ? s.slice(i, i + 2)
      : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
  };
};

('use strict');
var at = _stringAt(true);

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var _advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG =
  _cof(
    (function () {
      return arguments;
    })(),
  ) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined
    ? 'Undefined'
    : it === null
    ? 'Null'
    : // @@toStringTag case
    typeof (T = tryGet((O = Object(it)), TAG$1)) == 'string'
    ? T
    : // builtinTag case
    ARG
    ? _cof(O)
    : // ES3 arguments fallback
    (B = _cof(O)) == 'Object' && typeof O.callee == 'function'
    ? 'Arguments'
    : B;
};

('use strict');

var builtinExec = RegExp.prototype.exec;

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var _regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (_classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

('use strict');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX$1 = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
    re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX$1] !== 0 || re2[LAST_INDEX$1] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX$1];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX$1] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var _regexpExec = patchedExec;

('use strict');

_export(
  {
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec,
  },
  {
    exec: _regexpExec,
  },
);

var es6_regexp_exec = {};

('use strict');

var SPECIES = _wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () {
    return originalExec.apply(this, arguments);
  };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = _wks(KEY);

  var DELEGATES_TO_SYMBOL = !_fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL
    ? !_fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function () {
          execCalled = true;
          return null;
        };
        if (KEY === 'split') {
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          re.constructor = {};
          re.constructor[SPECIES] = function () {
            return re;
          };
        }
        re[SYMBOL]('');
        return !execCalled;
      })
    : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) || (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === _regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var strfn = fns[0];
    var rxfn = fns[1];

    _redefine(String.prototype, KEY, strfn);
    _hide(
      RegExp.prototype,
      SYMBOL,
      length == 2
        ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          function (string, arg) {
            return rxfn.call(string, this, arg);
          }
        : // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          function (string) {
            return rxfn.call(string, this);
          },
    );
  }
};

('use strict');

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    },
  ];
});

var es6_regexp_match = {};

('use strict');

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = _anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = _regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(_toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    },
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = _toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return str.slice(0, position);
        case "'":
          return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

var es6_regexp_replace = {};

('use strict');

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !_fails(function () {
  RegExp(MAX_UINT32, 'y');
});

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!_isRegexp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while ((match = _regexpExec.call(separatorCopy, string))) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = _anObject(regexp);
      var S = String(this);
      var C = _speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    },
  ];
});

var es6_regexp_split = {};

// 7.2.9 SameValue(x, y)
var _sameValue =
  Object.is ||
  function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

('use strict');

// @@search logic
_fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = _regexpExecAbstract(rx, S);
      if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    },
  ];
});

var es6_regexp_search = {};

('use strict');

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  _redefine(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (
  _fails(function () {
    return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
  })
) {
  define(function toString() {
    var R = _anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

var es6_regexp_toString = {};

var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');

  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible =
    Object.isExtensible ||
    function () {
      return true;
    };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, {
      value: {
        i: 'O' + ++id, // object ID
        w: {}, // weak collections IDs
      },
    });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }
    return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }
    return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = (module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze,
  });
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has((it = stat ? it : it.prototype), TAG)) def(it, TAG, { configurable: true, value: tag });
};

var f$2 = _wks;

var _wksExt = {
  f: f$2,
};

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

// 19.1.2.14 / 15.2.3.14 Object.keys(O)

var _objectKeys =
  Object.keys ||
  function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
  f: f$1,
};

// all enumerable object keys, includes symbols

var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
  }
  return result;
};

var _objectDps = _descriptors
  ? Object.defineProperties
  : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, (P = keys[i++]), Properties[P]);
      return O;
    };

var document$1 = _global.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function () {
  /* empty */
};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate =
  Object.create ||
  function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
  f: f,
};

('use strict');
// ECMAScript 6 symbols shim

var META = _meta.KEY;

var gOPD = _objectGopd.f;
var dP = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc =
  _descriptors &&
  _fails(function () {
    return (
      _objectCreate(
        dP({}, 'a', {
          get: function () {
            return dP(this, 'a', { value: 7 }).a;
          },
        }),
      ).a != 7
    );
  })
    ? function (it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
      }
    : dP;

var wrap$1 = function (tag) {
  var sym = (AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE]));
  sym._k = tag;
  return sym;
};

var isSymbol =
  USE_NATIVE && typeof $Symbol.iterator == 'symbol'
    ? function (it) {
        return typeof it == 'symbol';
      }
    : function (it) {
        return it instanceof $Symbol;
      };

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys((P = _toIobject(P)));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, (key = _toPrimitive(key, true)));
  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || (_has(this, HIDDEN) && this[HIDDEN][key]) ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META) result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, (key = names[i++])) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }
  return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap$1(tag);
  };
  _redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap$1(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (
  var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),
    j = 0;
  es6Symbols.length > j;

)
  _wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k; ) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  for: function (key) {
    return _has(SymbolRegistry, (key += '')) ? SymbolRegistry[key] : (SymbolRegistry[key] = $Symbol(key));
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () {
    setter = true;
  },
  useSimple: function () {
    setter = false;
  },
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols,
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = _fails(function () {
  _objectGops.f(1);
});

_export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return _objectGops.f(_toObject(it));
  },
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON &&
  _export(
    _export.S +
      _export.F *
        (!USE_NATIVE ||
          _fails(function () {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
          })),
    'JSON',
    {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if ((!_isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
        if (!_isArray(replacer))
          replacer = function (key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      },
    },
  );

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

var es6_symbol = {};

_wksDefine('asyncIterator');

var es7_symbol_asyncIterator = {};

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = (exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY]);
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = (exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
});

var _stringTrim = exporter;

('use strict');
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim(
  'trimLeft',
  function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  },
  'trimStart',
);

var es7_string_trimLeft = {};

('use strict');
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim(
  'trimRight',
  function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  },
  'trimEnd',
);

var es7_string_trimRight = {};

var navigator = _global.navigator;

var _userAgent = (navigator && navigator.userAgent) || '';

// ie9- setTimeout & setInterval additional parameters fix

var slice = [].slice;
var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(
      boundArgs
        ? function () {
            // eslint-disable-next-line no-new-func
            (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
          }
        : fn,
      time,
    );
  };
};
_export(_export.G + _export.B + _export.F * MSIE, {
  setTimeout: wrap(_global.setTimeout),
  setInterval: wrap(_global.setInterval),
});

var web_timers = {};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};

var process$1 = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$1) == 'process') {
    defer = function (id) {
      process$1.nextTick(_ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask,
};

_export(_export.G + _export.B, {
  setImmediate: _task.set,
  clearImmediate: _task.clear,
});

var web_immediate = {};

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var _iterators = {};

('use strict');

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

('use strict');

var ITERATOR$1 = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$1] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod('entries')) : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR$1] != 'function') _hide(IteratorPrototype, ITERATOR$1, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$1])) {
    _hide(proto, ITERATOR$1, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries,
    };
    if (FORCED)
      for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      }
    else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

('use strict');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(
  Array,
  'Array',
  function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  },
  function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  },
  'values',
);

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var ITERATOR = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false,
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) _hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
  }
}

var web_dom_iterable = {};

var AppHelpers = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getAPIBase = getAPIBase;
  exports.getLanguages = getLanguages;
  exports.removeCurrentLanguage = removeCurrentLanguage;
  exports.getCurrentLanguage = getCurrentLanguage;
  exports.changeLanguage = changeLanguage;
  exports.getRouterBasename = getRouterBasename;
  exports.getVersion = getVersion;

  function getAPIBase() {
    let M;

    if (Boolean(process.env.REACT_APP_MGNL_IS_PREVIEW)) {
      M = process.env.REACT_APP_MGNL_BASE_AUTHOR;
    } else {
      M = process.env.REACT_APP_MGNL_BASE_PUBLIC;
    }

    let API_BASE = process.env.REACT_APP_MGNL_HOST + M;
    return API_BASE;
  }

  function getLanguages() {
    return process.env.REACT_APP_MGNL_LANGUAGES.split(' ');
  }

  function removeCurrentLanguage(string, currentLanguage) {
    return string.replace(new RegExp('/' + currentLanguage + '($|/)'), '/');
  }

  function getCurrentLanguage(path, locales) {
    const languages = locales;

    for (let i = 0; i < languages.length; i++) {
      const language = languages[i];

      if (new RegExp('/' + language + '($|/)').test(path)) {
        return language;
      }
    }

    return languages[0];
  }

  function changeLanguage(newLanguage) {
    const nodeName = process.env.REACT_APP_MGNL_APP_BASE;
    const languages = getLanguages();
    let pathname = window.location.pathname;
    const currentLanguage = getCurrentLanguage();
    pathname = removeCurrentLanguage(pathname, currentLanguage);

    if (languages[0] !== newLanguage) {
      if (pathname.indexOf(nodeName) > -1) {
        pathname = pathname.replace(new RegExp(nodeName), '/' + newLanguage + nodeName);
      } else {
        pathname = '/' + newLanguage + pathname;
      }
    }

    window.location.href = window.location.origin + pathname + window.location.search;
  }

  function getRouterBasename() {
    const nodeName = process.env.REACT_APP_MGNL_APP_BASE;
    const languages = getLanguages();
    var pathname = window.location.pathname;

    if (pathname.indexOf(nodeName) > -1) {
      return pathname.replace(new RegExp(nodeName + '.*'), '') + nodeName;
    }

    const currentLanguage = getCurrentLanguage();
    return languages[0] === currentLanguage ? '/' : '/' + currentLanguage;
  }

  function getVersion(path) {
    return new URLSearchParams(path).get('mgnlVersion');
  }
});

const AppHelpers$1 = /*@__PURE__*/ getDefaultExportFromCjs(AppHelpers);

var pages = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getPage = getPage;

  var _react = _interopRequireDefault(react$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  const { REACT_APP_MGNL_HOST, REACT_APP_MGNL_API_PAGES, REACT_APP_MGNL_API_TEMPLATES, SITE_COUNTRY, SITE_NAME } = process.env;

  const getPagePath = (context, settings) => {
    const languages = context.locales;
    const nodeName = '/'.concat(SITE_NAME, '-').concat(SITE_COUNTRY);
    let path = REACT_APP_MGNL_HOST + REACT_APP_MGNL_API_PAGES + nodeName + context.resolvedUrl.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');
    const currentLanguage = context.query.mgnlPreview === 'false' ? (0, AppHelpers.getCurrentLanguage)(path, context.locales) : context.locale;

    if (currentLanguage !== languages[0]) {
      path = (0, AppHelpers.removeCurrentLanguage)(path, currentLanguage);
      path += (context.query.mgnlPreview === 'false' ? '&' : '?') + 'lang=' + currentLanguage;
    }

    console.log({
      currentLanguage,
    });
    return path;
  };

  async function getPage(context, settings) {
    let templateDefinitions = {};
    const path = getPagePath(context, settings);
    console.log('final path', path);
    const pagesRes = await fetch(path);
    const page = await pagesRes.json();

    if (context.query.mgnlPreview === 'false') {
      const templateDefinitionsRes = await fetch(REACT_APP_MGNL_HOST + REACT_APP_MGNL_API_TEMPLATES + '/' + page['mgnl:template']);
      console.log('templateDefinitionsRes', templateDefinitionsRes);
      templateDefinitions = await templateDefinitionsRes.json();
    }

    return {
      page,
      templateDefinitions,
    };
  }
});

const pages$1 = /*@__PURE__*/ getDefaultExportFromCjs(pages);

/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

('use strict');
var n = 'function' === typeof Symbol && Symbol.for,
  p = n ? Symbol.for('react.element') : 60103,
  q = n ? Symbol.for('react.portal') : 60106,
  r = n ? Symbol.for('react.fragment') : 60107,
  t = n ? Symbol.for('react.strict_mode') : 60108,
  u = n ? Symbol.for('react.profiler') : 60114,
  v = n ? Symbol.for('react.provider') : 60109,
  w = n ? Symbol.for('react.context') : 60110,
  x = n ? Symbol.for('react.forward_ref') : 60112,
  y = n ? Symbol.for('react.suspense') : 60113,
  z = n ? Symbol.for('react.memo') : 60115,
  A = n ? Symbol.for('react.lazy') : 60116,
  B = 'function' === typeof Symbol && Symbol.iterator;
function C(a) {
  for (var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a, c = 1; c < arguments.length; c++) b += '&args[]=' + encodeURIComponent(arguments[c]);
  return 'Minified React error #' + a + '; visit ' + b + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
}
var D = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  E = {};
function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
F.prototype.isReactComponent = {};
F.prototype.setState = function (a, b) {
  if ('object' !== typeof a && 'function' !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, 'setState');
};
F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
};
function G() {}
G.prototype = F.prototype;
function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
var I = (H.prototype = new G());
I.constructor = H;
objectAssign(I, F.prototype);
I.isPureReactComponent = !0;
var J = { current: null },
  K = Object.prototype.hasOwnProperty,
  L = { key: !0, ref: !0, __self: !0, __source: !0 };
function M(a, b, c) {
  var e,
    d = {},
    g = null,
    k = null;
  if (null != b) for (e in (void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = '' + b.key), b)) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;
  else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];
    d.children = h;
  }
  if (a && a.defaultProps) for (e in ((f = a.defaultProps), f)) void 0 === d[e] && (d[e] = f[e]);
  return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J.current };
}
function N(a, b) {
  return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O(a) {
  return 'object' === typeof a && null !== a && a.$$typeof === p;
}
function escape(a) {
  var b = { '=': '=0', ':': '=2' };
  return (
    '$' +
    ('' + a).replace(/[=:]/g, function (a) {
      return b[a];
    })
  );
}
var P = /\/+/g,
  Q = [];
function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }
  return { result: a, keyPrefix: b, func: c, context: e, count: 0 };
}
function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}
function T(a, b, c, e) {
  var d = typeof a;
  if ('undefined' === d || 'boolean' === d) a = null;
  var g = !1;
  if (null === a) g = !0;
  else
    switch (d) {
      case 'string':
      case 'number':
        g = !0;
        break;
      case 'object':
        switch (a.$$typeof) {
          case p:
          case q:
            g = !0;
        }
    }
  if (g) return c(e, a, '' === b ? '.' + U(a, 0) : b), 1;
  g = 0;
  b = '' === b ? '.' : b + ':';
  if (Array.isArray(a))
    for (var k = 0; k < a.length; k++) {
      d = a[k];
      var f = b + U(d, k);
      g += T(d, f, c, e);
    }
  else if ((null === a || 'object' !== typeof a ? (f = null) : ((f = (B && a[B]) || a['@@iterator']), (f = 'function' === typeof f ? f : null)), 'function' === typeof f))
    for (a = f.call(a), k = 0; !(d = a.next()).done; ) (d = d.value), (f = b + U(d, k++)), (g += T(d, f, c, e));
  else if ('object' === d) throw ((c = '' + a), Error(C(31, '[object Object]' === c ? 'object with keys {' + Object.keys(a).join(', ') + '}' : c, '')));
  return g;
}
function V(a, b, c) {
  return null == a ? 0 : T(a, '', b, c);
}
function U(a, b) {
  return 'object' === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}
function W(a, b) {
  a.func.call(a.context, b, a.count++);
}
function aa(a, b, c) {
  var e = a.result,
    d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a)
    ? X(a, e, c, function (a) {
        return a;
      })
    : null != a && (O(a) && (a = N(a, d + (!a.key || (b && b.key === a.key) ? '' : ('' + a.key).replace(P, '$&/') + '/') + c)), e.push(a));
}
function X(a, b, c, e, d) {
  var g = '';
  null != c && (g = ('' + c).replace(P, '$&/') + '/');
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}
var Y = { current: null };
function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}
var ba = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J, IsSomeRendererActing: { current: !1 }, assign: objectAssign };
var Children = {
  map: function (a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(
      a,
      function () {
        return null;
      },
      null,
    );
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) throw Error(C(143));
    return a;
  },
};
var Component = F;
var Fragment = r;
var Profiler = u;
var PureComponent = H;
var StrictMode = t;
var Suspense = y;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
var cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = objectAssign({}, a.props),
    d = a.key,
    g = a.ref,
    k = a._owner;
  if (null != b) {
    void 0 !== b.ref && ((g = b.ref), (k = J.current));
    void 0 !== b.key && (d = '' + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }
  var h = arguments.length - 2;
  if (1 === h) e.children = c;
  else if (1 < h) {
    f = Array(h);
    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];
    e.children = f;
  }
  return { $$typeof: p, type: a.type, key: d, ref: g, props: e, _owner: k };
};
var createContext = function (a, b) {
  void 0 === b && (b = null);
  a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: v, _context: a };
  return (a.Consumer = a);
};
var createElement = M;
var createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
var createRef = function () {
  return { current: null };
};
var forwardRef = function (a) {
  return { $$typeof: x, render: a };
};
var isValidElement = O;
var lazy = function (a) {
  return { $$typeof: A, _ctor: a, _status: -1, _result: null };
};
var memo = function (a, b) {
  return { $$typeof: z, type: a, compare: void 0 === b ? null : b };
};
var useCallback = function (a, b) {
  return Z().useCallback(a, b);
};
var useContext = function (a, b) {
  return Z().useContext(a, b);
};
var useDebugValue = function () {};
var useEffect = function (a, b) {
  return Z().useEffect(a, b);
};
var useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};
var useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};
var useMemo = function (a, b) {
  return Z().useMemo(a, b);
};
var useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};
var useRef = function (a) {
  return Z().useRef(a);
};
var useState = function (a) {
  return Z().useState(a);
};
var version = '16.14.0';

var react_production_min = {
  Children: Children,
  Component: Component,
  Fragment: Fragment,
  Profiler: Profiler,
  PureComponent: PureComponent,
  StrictMode: StrictMode,
  Suspense: Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement: cloneElement,
  createContext: createContext,
  createElement: createElement,
  createFactory: createFactory,
  createRef: createRef,
  forwardRef: forwardRef,
  isValidElement: isValidElement,
  lazy: lazy,
  memo: memo,
  useCallback: useCallback,
  useContext: useContext,
  useDebugValue: useDebugValue,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  version: version,
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

('use strict');

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

('use strict');

var printWarning = function () {};

if ('development' !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ('development' !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') +
                ': ' +
                location +
                ' type `' +
                typeSpecName +
                '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' +
                typeof typeSpecs[typeSpecName] +
                '`.',
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') +
              ': type specification of ' +
              location +
              ' `' +
              typeSpecName +
              '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' +
              typeof error +
              '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).',
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if ('development' !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {
  /** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  'use strict';

  if ('development' !== 'production') {
    (function () {
      'use strict';

      var _assign = objectAssign;
      var checkPropTypes = checkPropTypes_1;

      var ReactVersion = '16.14.0';

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null;
        }

        var maybeIterator = (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      /**
       * Keeps track of the current dispatcher.
       */
      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */
      var ReactCurrentBatchConfig = {
        suspense: null,
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      };

      var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        var sourceInfo = '';

        if (source) {
          var path = source.fileName;
          var fileName = path.replace(BEFORE_SLASH_RE, '');

          {
            // In DEV, include code for a common special case:
            // prefer "folder/index.js" instead of just "index.js".
            if (/^index\./.test(fileName)) {
              var match = path.match(BEFORE_SLASH_RE);

              if (match) {
                var pathBeforeSlash = match[1];

                if (pathBeforeSlash) {
                  var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                  fileName = folderName + '/' + fileName;
                }
              }
            }
          }

          sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
        } else if (ownerName) {
          sourceInfo = ' (created by ' + ownerName + ')';
        }

        return '\n    in ' + (name || 'Unknown') + sourceInfo;
      }

      var Resolved = 1;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved ? lazyComponent._result : null;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return 'Profiler';

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';

            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);

            case REACT_LAZY_TYPE: {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
          }
        }

        return null;
      }

      var ReactDebugCurrentFrame = {};
      var currentlyValidatingElement = null;
      function setCurrentlyValidatingElement(element) {
        {
          currentlyValidatingElement = element;
        }
      }

      {
        // Stack implementation injected by the current renderer.
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ''; // Add an extra top frame while an element is being validated

          if (currentlyValidatingElement) {
            var name = getComponentName(currentlyValidatingElement.type);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
          } // Delegate to the injected renderer-specific implementation

          var impl = ReactDebugCurrentFrame.getCurrentStack;

          if (impl) {
            stack += impl() || '';
          }

          return stack;
        };
      }

      /**
       * Used by act() to track whether you're inside an act() scope.
       */
      var IsSomeRendererActing = {
        current: false,
      };

      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign,
      };

      {
        _assign(ReactSharedInternals, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {},
        });
      }

      // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

          if (!hasExistingStack) {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();

            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            var argIndex = 0;
            var message =
              'Warning: ' +
              format.replace(/%s/g, function () {
                return args[argIndex++];
              });
            throw new Error(message);
          } catch (x) {}
        }
      }

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = (_constructor && (_constructor.displayName || _constructor.name)) || 'ReactClass';
          var warningKey = componentName + '.' + callerName;

          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }

          error(
            "Can't call %s on a component that is not yet mounted. " +
              'This is a no-op, but it might indicate a bug in your application. ' +
              'Instead, assign to `this.state` directly or define a `state = {};` ' +
              'class property with the desired state in the %s component.',
            callerName,
            componentName,
          );

          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */

      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        },
      };

      var emptyObject = {};

      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
          }
        }

        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */

      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */

      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
        };

        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

              return undefined;
            },
          });
        };

        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      function ComponentDummy() {}

      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);

      pureComponentPrototype.isPureReactComponent = true;

      // an immutable object with a single mutable value
      function createRef() {
        var refObject = {
          current: null,
        };

        {
          Object.seal(refObject);
        }

        return refObject;
      }

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true,
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }

        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;

              error(
                '%s: `key` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://fb.me/react-special-props)',
                displayName,
              );
            }
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;

              error(
                '%s: `ref` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://fb.me/react-special-props)',
                displayName,
              );
            }
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true,
        });
      }

      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error(
                'Component "%s" contains the string ref "%s". ' +
                  'Support for string refs will be removed in a future major release. ' +
                  'This case cannot be automatically converted to an arrow function. ' +
                  'We ask you to manually fix this case by using useRef() or createRef() instead. ' +
                  'Learn more about using refs safely here: ' +
                  'https://fb.me/react-strict-mode-string-ref',
                getComponentName(ReactCurrentOwner.current.type),
                config.ref,
              );

              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function (type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner,
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false,
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self,
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source,
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */

      function createElement(type, config, children) {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;

            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }

          props.children = childArray;
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        {
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }

        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */

      function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) {
          {
            throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.');
          }
        }

        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted

        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          } // Remaining properties override existing props

          var defaultProps;

          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2',
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });
        return '$' + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;

      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];

      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0,
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;

        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }
      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;

            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          callback(
            traverseContext,
            children, // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows.
            nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar,
          );
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                if (!didWarnAboutMaps) {
                  warn(
                    'Using Maps as children is deprecated and will be removed in ' +
                      'a future major release. Consider converting children to ' +
                      'an array of keyed ReactElements instead.',
                  );
                }

                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;

            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';

            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }

            var childrenString = '' + children;

            {
              {
                throw Error(
                  'Objects are not valid as a React child (found: ' +
                    (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) +
                    ').' +
                    addendum,
                );
              }
            }
          }
        }

        return subtreeCount;
      }
      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */

      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }
      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */

      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof component === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        } // Implicit key determined by the index in the set

        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
          context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
      }
      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */

      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }

        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
        var mappedChild = func.call(context, child, bookKeeping.count++);

        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(
              mappedChild, // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey,
            );
          }

          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';

        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }

        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }
      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */

      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }

        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */

      function countChildren(children) {
        return traverseAllChildren(
          children,
          function () {
            return null;
          },
          null,
        );
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */

      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
          return child;
        });
        return result;
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */

      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error('React.Children.only expected to receive a single React element child.');
          }
        }

        return children;
      }

      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
              error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
            }
          }
        }

        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context,
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;

        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits,
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function () {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;

                  error(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?',
                  );
                }

                return context.Provider;
              },
              set: function (_Provider) {
                context.Provider = _Provider;
              },
            },
            _currentValue: {
              get: function () {
                return context._currentValue;
              },
              set: function (_currentValue) {
                context._currentValue = _currentValue;
              },
            },
            _currentValue2: {
              get: function () {
                return context._currentValue2;
              },
              set: function (_currentValue2) {
                context._currentValue2 = _currentValue2;
              },
            },
            _threadCount: {
              get: function () {
                return context._threadCount;
              },
              set: function (_threadCount) {
                context._threadCount = _threadCount;
              },
            },
            Consumer: {
              get: function () {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;

                  error(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?',
                  );
                }

                return context.Consumer;
              },
            },
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }

        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }

        return context;
      }

      function lazy(ctor) {
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          // React uses these fields to store the result.
          _status: -1,
          _result: null,
        };

        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function () {
                return defaultProps;
              },
              set: function (newDefaultProps) {
                error(
                  'React.lazy(...): It is not supported to assign `defaultProps` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.',
                );

                defaultProps = newDefaultProps; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true,
                });
              },
            },
            propTypes: {
              configurable: true,
              get: function () {
                return propTypes;
              },
              set: function (newPropTypes) {
                error(
                  'React.lazy(...): It is not supported to assign `propTypes` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.',
                );

                propTypes = newPropTypes; // Match production behavior more closely:

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true,
                });
              },
            },
          });
        }

        return lazyType;
      }

      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
          } else if (typeof render !== 'function') {
            error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error(
                'forwardRef render functions accept exactly two parameters: props and ref. %s',
                render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.',
              );
            }
          }

          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
            }
          }
        }

        return {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render,
        };
      }

      function isValidElementType(type) {
        return (
          typeof type === 'string' ||
          typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
          }
        }

        return {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare,
        };
      }

      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;

        if (!(dispatcher !== null)) {
          {
            throw Error(
              'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.',
            );
          }
        }

        return dispatcher;
      }

      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();

        {
          if (unstable_observedBits !== undefined) {
            error(
              'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s',
              unstable_observedBits,
              typeof unstable_observedBits === 'number' && Array.isArray(arguments[2])
                ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks'
                : '',
            );
          } // TODO: add a more generic warning for invalid values.

          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error(
                'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' +
                  'removed in a future major release. Did you mean to call useContext(Context) instead?',
              );
            } else if (realContext.Provider === Context) {
              error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
            }
          }
        }

        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }

      var propTypesMisspellWarningShown;

      {
        propTypesMisspellWarningShown = false;
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }

      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }

      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }

        return '';
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = '\n\nCheck the top-level render call using <' + parentName + '>.';
          }
        }

        return info;
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
        }

        setCurrentlyValidatingElement(element);

        {
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
        }

        setCurrentlyValidatingElement(null);
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var name = getComponentName(type);
          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (
            typeof type === 'object' &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)
          ) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
            setCurrentlyValidatingElement(null);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;

            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          setCurrentlyValidatingElement(fragment);
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

              break;
            }
          }

          if (fragment.ref !== null) {
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
          }

          setCurrentlyValidatingElement(null);
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || (typeof type === 'object' && type !== null && Object.keys(type).length === 0)) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendumForProps(props);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          {
            error(
              'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s',
              typeString,
              info,
            );
          }
        }

        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
      var didWarnAboutDeprecatedCreateFactory = false;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;

        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;

            warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
          } // Legacy hook: remove it

          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

              Object.defineProperty(this, 'type', {
                value: type,
              });
              return type;
            },
          });
        }

        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);

        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }

        validatePropTypes(newElement);
        return newElement;
      }

      {
        try {
          var frozenObject = Object.freeze({});
          var testMap = new Map([[frozenObject, null]]);
          var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
          // https://github.com/rollup/rollup/issues/1771
          // TODO: we can remove these if Rollup fixes the bug.

          testMap.set(0, 0);
          testSet.add(0);
        } catch (e) {}
      }

      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild,
      };

      exports.Children = Children;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports.cloneElement = cloneElement$1;
      exports.createContext = createContext;
      exports.createElement = createElement$1;
      exports.createFactory = createFactory;
      exports.createRef = createRef;
      exports.forwardRef = forwardRef;
      exports.isValidElement = isValidElement;
      exports.lazy = lazy;
      exports.memo = memo;
      exports.useCallback = useCallback;
      exports.useContext = useContext;
      exports.useDebugValue = useDebugValue;
      exports.useEffect = useEffect;
      exports.useImperativeHandle = useImperativeHandle;
      exports.useLayoutEffect = useLayoutEffect;
      exports.useMemo = useMemo;
      exports.useReducer = useReducer;
      exports.useRef = useRef;
      exports.useState = useState;
      exports.version = ReactVersion;
    })();
  }
});

var react = createCommonjsModule(function (module) {
  'use strict';

  if ('development' === 'production') {
    module.exports = react_production_min;
  } else {
    module.exports = react_development;
  }
});

var mgnlReactEditor_min = createCommonjsModule(function (module, exports) {
  !(function webpackUniversalModuleDefinition(t, c) {
    if ('object' == 'object' && 'object' == 'object') module.exports = c(react);
    else if ('function' == typeof undefined && undefined.amd) undefined(['react'], c);
    else {
      var u = 'object' == 'object' ? c(react) : c(t.react);
      for (var l in u) ('object' == 'object' ? exports : t)[l] = u[l];
    }
  })(commonjsGlobal, function (t) {
    return (() => {
      var c = {
          36: (t, c, u) => {
            'use strict';
            t.exports = u(584);
          },
          703: (t, c, u) => {
            'use strict';
            var l = u(414);
            function emptyFunction() {}
            function emptyFunctionWithReset() {}
            (emptyFunctionWithReset.resetWarningCache = emptyFunction),
              (t.exports = function () {
                function shim(t, c, u, y, _, v) {
                  if (v !== l) {
                    var E = new Error(
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                    );
                    throw ((E.name = 'Invariant Violation'), E);
                  }
                }
                function getShim() {
                  return shim;
                }
                shim.isRequired = shim;
                var t = {
                  array: shim,
                  bool: shim,
                  func: shim,
                  number: shim,
                  object: shim,
                  string: shim,
                  symbol: shim,
                  any: shim,
                  arrayOf: getShim,
                  element: shim,
                  elementType: shim,
                  instanceOf: getShim,
                  node: shim,
                  objectOf: getShim,
                  oneOf: getShim,
                  oneOfType: getShim,
                  shape: getShim,
                  exact: getShim,
                  checkPropTypes: emptyFunctionWithReset,
                  resetWarningCache: emptyFunction,
                };
                return (t.PropTypes = t), t;
              });
          },
          697: (t, c, u) => {
            t.exports = u(703)();
          },
          414: t => {
            'use strict';
            t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
          },
          584: function (t) {
            t.exports = (function (t) {
              var c = {};
              function e(u) {
                if (c[u]) return c[u].exports;
                var l = (c[u] = { i: u, l: !1, exports: {} });
                return t[u].call(l.exports, l, l.exports, e), (l.l = !0), l.exports;
              }
              return (
                (e.m = t),
                (e.c = c),
                (e.d = function (t, c, u) {
                  e.o(t, c) || Object.defineProperty(t, c, { enumerable: !0, get: u });
                }),
                (e.r = function (t) {
                  'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
                }),
                (e.t = function (t, c) {
                  if ((1 & c && (t = e(t)), 8 & c)) return t;
                  if (4 & c && 'object' == typeof t && t && t.__esModule) return t;
                  var u = Object.create(null);
                  if ((e.r(u), Object.defineProperty(u, 'default', { enumerable: !0, value: t }), 2 & c && 'string' != typeof t))
                    for (var l in t)
                      e.d(
                        u,
                        l,
                        function (c) {
                          return t[c];
                        }.bind(null, l),
                      );
                  return u;
                }),
                (e.n = function (t) {
                  var c =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return e.d(c, 'a', c), c;
                }),
                (e.o = function (t, c) {
                  return Object.prototype.hasOwnProperty.call(t, c);
                }),
                (e.p = ''),
                e((e.s = 0))
              );
            })([
              function (t, c, u) {
                t.exports = u(1);
              },
              function (t, c, u) {
                'use strict';
                function r(t) {
                  return (r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                        })(t);
                }
                function o(t, c) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, c) {
                      var u = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
                      if (null != u) {
                        var l,
                          y,
                          _ = [],
                          v = !0,
                          E = !1;
                        try {
                          for (u = u.call(t); !(v = (l = u.next()).done) && (_.push(l.value), !c || _.length !== c); v = !0);
                        } catch (t) {
                          (E = !0), (y = t);
                        } finally {
                          try {
                            v || null == u.return || u.return();
                          } finally {
                            if (E) throw y;
                          }
                        }
                        return _;
                      }
                    })(t, c) ||
                    (function (t, c) {
                      if (t) {
                        if ('string' == typeof t) return i(t, c);
                        var u = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                          'Object' === u && t.constructor && (u = t.constructor.name),
                          'Map' === u || 'Set' === u ? Array.from(t) : 'Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? i(t, c) : void 0
                        );
                      }
                    })(t, c) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      );
                    })()
                  );
                }
                function i(t, c) {
                  (null == c || c > t.length) && (c = t.length);
                  for (var u = 0, l = new Array(c); u < c; u++) l[u] = t[u];
                  return l;
                }
                u.r(c),
                  u.d(c, 'TemplateAnnotations', function () {
                    return E;
                  }),
                  u.d(c, 'EditorContextHelper', function () {
                    return P;
                  }),
                  u.d(c, 'LoggerService', function () {
                    return C;
                  }),
                  u.d(c, 'PersonalizationService', function () {
                    return S;
                  });
                var l = {
                    content: function (t, c) {
                      var u = t ? t[c] : null;
                      return null != u ? 'website:'.concat(u) : '';
                    },
                    availableComponents: function (t, c, u) {
                      return u && u[c]
                        ? Object.keys(u[c])
                            .map(function (t) {
                              return u[c][t].id;
                            })
                            .join(',')
                        : '';
                    },
                    showAddButton: function (t, c, u, l) {
                      return !u || null == u.maxComponents || !l || null == l.componentCount || l.componentCount < u.maxComponents;
                    },
                    activationStatus: function (t) {
                      if (!t || !t['mgnl:activationStatus'] || 'false' === t['mgnl:activationStatus']) return 0;
                      var c = t['mgnl:lastModified'] ? new Date(t['mgnl:lastModified']) : null,
                        u = t['mgnl:lastActivated'] ? new Date(t['mgnl:lastActivated']) : null;
                      return c && u && c.getTime() > u.getTime() ? 1 : 2;
                    },
                  },
                  y = { content: ['@path', ''], dialog: ['dialog', '', f] },
                  _ = {
                    name: ['@name', ''],
                    content: y.content,
                    dialog: y.dialog,
                    availableComponents: ['availableComponents', []],
                    type: ['type', 'list', f],
                    label: ['title', '', f],
                    inherit: ['inheritance', !1, f],
                    optional: ['optional', !1, f],
                    createdAreaNode: ['createAreaNode', !0, f],
                    showAddButton: ['maxComponents', !0],
                    showNewComponentArea: [null, !0],
                    description: ['description', '', f],
                    activationStatus: [null, 0],
                  },
                  v = { content: y.content, dialog: y.dialog, label: ['title', '', f], description: ['description', '', f], activationStatus: [null, 0] };
                function s(t, c, u, y) {
                  var _ = [];
                  return (
                    Object.keys(c).forEach(function (v) {
                      var E = o(c[v], 3),
                        P = E[0],
                        C = E[1],
                        w = E[2],
                        O = l[v],
                        S = C;
                      O ? (S = O(t, P, u, y)) : w ? (S = w(u, P, C)) : null != t && null !== P && (S = t[P] || '');
                      var A = { key: v, value: S };
                      ('string' != typeof A.value || A.value) && _.push(''.concat(v, '="').concat(A.value, '"'));
                    }),
                    _.join(' ')
                  );
                }
                function f(t, c, u) {
                  var l = t && 'object' === r(t) && c ? t[c] : null;
                  return (l = null == l ? u : l), null != (l = 'boolean' == typeof u ? Boolean(l) : l) ? l : u;
                }
                var E = {
                    getAreaCommentString: function (t, c, u) {
                      var l = { componentCount: u },
                        y = c && c.areas ? c.areas[t['@name']] : {};
                      return 'cms:area '.concat(s(t, _, y, l));
                    },
                    getComponentCommentString: function (t, c) {
                      return 'cms:component '.concat(s(t, v, c));
                    },
                    getPageCommentString: function (t, c) {
                      return 'cms:page '.concat(s(t, y, c));
                    },
                  },
                  h = function () {
                    return 'undefined' != typeof window && Boolean(window.location !== window.parent.location);
                  },
                  d = function () {
                    return h() && !window.location.search.includes('mgnlPreview=true') && !window.location.search.includes('mgnlPreviewAsVisitor=true');
                  },
                  P = {
                    inIframe: h,
                    inEditor: d,
                    refresh: function n() {
                      d() &&
                        document.documentElement.innerHTML.indexOf('\x3c!--cms:page') > -1 &&
                        (window.mgnlRefresh ? window.mgnlRefresh() : window.parent.mgnlRefresh ? window.parent.mgnlRefresh() : setTimeout(n, 200));
                    },
                    inEditorPreview: function () {
                      return h() && (window.location.search.includes('mgnlPreview=true') || window.location.search.includes('mgnlPreviewAsVisitor=true'));
                    },
                    onFrameReady: function () {
                      h() && (window.mgnlFrameReady ? window.mgnlFrameReady() : window.parent.mgnlFrameReady && window.parent.mgnlFrameReady());
                    },
                  };
                function g() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'log',
                    c = arguments.length > 1 ? arguments[1] : void 0;
                  if ('undefined' != typeof console) {
                    for (var u = arguments.length, l = new Array(u > 2 ? u - 2 : 0), y = 2; y < u; y++) l[y - 2] = arguments[y];
                    console[t](c, l);
                  }
                }
                var C = {
                    log: function (t) {
                      for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) u[l - 1] = arguments[l];
                      g('log', t, u);
                    },
                    info: function (t) {
                      for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) u[l - 1] = arguments[l];
                      g('info', t, u);
                    },
                    warn: function (t) {
                      for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) u[l - 1] = arguments[l];
                      g('warn', t, u);
                    },
                    error: function (t) {
                      for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) u[l - 1] = arguments[l];
                      g('error', t, u);
                    },
                  },
                  w = {};
                try {
                  !(function (t, c) {
                    if (
                      '+' !== new t('q=%2B').get('q') ||
                      '+' !== new t({ q: '+' }).get('q') ||
                      '+' !== new t([['q', '+']]).get('q') ||
                      'q=%0A' !== new t('q=\n').toString() ||
                      'q=+%26' !== new t({ q: ' &' }).toString() ||
                      'q=%25zx' !== new t({ q: '%zx' }).toString()
                    )
                      throw t;
                    w.URLSearchParams = t;
                  })(URLSearchParams);
                } catch (t) {
                  !(function (t, c, u) {
                    var l = t.create,
                      y = t.defineProperty,
                      _ = /[!'\(\)~]|%20|%00/g,
                      v = /%(?![0-9a-fA-F]{2})/g,
                      E = /\+/g,
                      P = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' },
                      C = {
                        append: function (t, c) {
                          h(this._ungap, t, c);
                        },
                        delete: function (t) {
                          delete this._ungap[t];
                        },
                        get: function (t) {
                          return this.has(t) ? this._ungap[t][0] : null;
                        },
                        getAll: function (t) {
                          return this.has(t) ? this._ungap[t].slice(0) : [];
                        },
                        has: function (t) {
                          return t in this._ungap;
                        },
                        set: function (t, u) {
                          this._ungap[t] = [c(u)];
                        },
                        forEach: function (t, u) {
                          var l = this;
                          for (var y in l._ungap) l._ungap[y].forEach(i, y);
                          function i(_) {
                            t.call(u, _, c(y), l);
                          }
                        },
                        toJSON: function () {
                          return {};
                        },
                        toString: function () {
                          var t = [];
                          for (var c in this._ungap) for (var u = m(c), l = 0, y = this._ungap[c]; l < y.length; l++) t.push(u + '=' + m(y[l]));
                          return t.join('&');
                        },
                      };
                    for (var O in C) y(f.prototype, O, { configurable: !0, writable: !0, value: C[O] });
                    function f(t) {
                      var c = l(null);
                      switch ((y(this, '_ungap', { value: c }), !0)) {
                        case !t:
                          break;
                        case 'string' == typeof t:
                          '?' === t.charAt(0) && (t = t.slice(1));
                          for (var _ = t.split('&'), v = 0, E = _.length; v < E; v++) {
                            var P = (C = _[v]).indexOf('=');
                            -1 < P ? h(c, d(C.slice(0, P)), d(C.slice(P + 1))) : C.length && h(c, d(C), '');
                          }
                          break;
                        case u(t):
                          for (v = 0, E = t.length; v < E; v++) {
                            var C;
                            h(c, (C = t[v])[0], C[1]);
                          }
                          break;
                        case 'forEach' in t:
                          t.forEach(p, c);
                          break;
                        default:
                          for (var w in t) h(c, w, t[w]);
                      }
                    }
                    function p(t, c) {
                      h(this, c, t);
                    }
                    function h(t, c, l) {
                      var y = u(l) ? l.join(',') : l;
                      c in t ? t[c].push(y) : (t[c] = [y]);
                    }
                    function d(t) {
                      return decodeURIComponent(t.replace(v, '%25').replace(E, ' '));
                    }
                    function m(t) {
                      return encodeURIComponent(t).replace(_, g);
                    }
                    function g(t) {
                      return P[t];
                    }
                    w.URLSearchParams = f;
                  })(Object, String, Array.isArray);
                }
                !(function (t) {
                  var c = !1;
                  try {
                    c = !!Symbol.iterator;
                  } catch (t) {}
                  function e(t, u) {
                    var l = [];
                    return (
                      t.forEach(u, l),
                      c
                        ? l[Symbol.iterator]()
                        : {
                            next: function () {
                              var t = l.shift();
                              return { done: void 0 === t, value: t };
                            },
                          }
                    );
                  }
                  'forEach' in t ||
                    (t.forEach = function (t, c) {
                      var u = this,
                        l = Object.create(null);
                      this.toString()
                        .replace(/=[\s\S]*?(?:&|$)/g, '=')
                        .split('=')
                        .forEach(function (y) {
                          y.length &&
                            !(y in l) &&
                            (l[y] = u.getAll(y)).forEach(function (l) {
                              t.call(c, l, y, u);
                            });
                        });
                    }),
                    'keys' in t ||
                      (t.keys = function () {
                        return e(this, function (t, c) {
                          this.push(c);
                        });
                      }),
                    'values' in t ||
                      (t.values = function () {
                        return e(this, function (t, c) {
                          this.push(t);
                        });
                      }),
                    'entries' in t ||
                      (t.entries = function () {
                        return e(this, function (t, c) {
                          this.push([c, t]);
                        });
                      }),
                    c && !(Symbol.iterator in t) && (t[Symbol.iterator] = t.entries),
                    'sort' in t ||
                      (t.sort = function () {
                        for (var t, c, u, l = this.entries(), y = l.next(), _ = y.done, v = [], E = Object.create(null); !_; )
                          (c = (u = y.value)[0]), v.push(c), c in E || (E[c] = []), E[c].push(u[1]), (_ = (y = l.next()).done);
                        for (v.sort(), t = 0; t < v.length; t++) this.delete(v[t]);
                        for (t = 0; t < v.length; t++) (c = v[t]), this.append(c, E[c].shift());
                      }),
                    (function (c) {
                      var u = c.defineProperty,
                        l = c.getOwnPropertyDescriptor,
                        o = function (c) {
                          var u = c.append;
                          (c.append = t.append), URLSearchParams.call(c, c._usp.search.slice(1)), (c.append = u);
                        },
                        i = function (t, c) {
                          if (!(t instanceof c)) throw new TypeError("'searchParams' accessed on an object that does not implement interface " + c.name);
                        },
                        a = function (y) {
                          var _,
                            v,
                            E = y.prototype,
                            P = l(E, 'searchParams'),
                            C = l(E, 'href'),
                            w = l(E, 'search');
                          !P &&
                            w &&
                            w.set &&
                            ((v = (function (c) {
                              function r(u, l) {
                                t.append.call(this, u, l), (u = this.toString()), c.set.call(this._usp, u ? '?' + u : '');
                              }
                              function o(u) {
                                t.delete.call(this, u), (u = this.toString()), c.set.call(this._usp, u ? '?' + u : '');
                              }
                              function i(u, l) {
                                t.set.call(this, u, l), (u = this.toString()), c.set.call(this._usp, u ? '?' + u : '');
                              }
                              return function (t, c) {
                                return (t.append = r), (t.delete = o), (t.set = i), u(t, '_usp', { configurable: !0, writable: !0, value: c });
                              };
                            })(w)),
                            (_ = function (t, c) {
                              return u(t, '_searchParams', { configurable: !0, writable: !0, value: v(c, t) }), c;
                            }),
                            c.defineProperties(E, {
                              href: {
                                get: function () {
                                  return C.get.call(this);
                                },
                                set: function (t) {
                                  var c = this._searchParams;
                                  C.set.call(this, t), c && o(c);
                                },
                              },
                              search: {
                                get: function () {
                                  return w.get.call(this);
                                },
                                set: function (t) {
                                  var c = this._searchParams;
                                  w.set.call(this, t), c && o(c);
                                },
                              },
                              searchParams: {
                                get: function () {
                                  return i(this, y), this._searchParams || _(this, new URLSearchParams(this.search.slice(1)));
                                },
                                set: function (t) {
                                  i(this, y), _(this, t);
                                },
                              },
                            }));
                        };
                      try {
                        a(HTMLAnchorElement), /^function|object$/.test(typeof URL) && URL.prototype && a(URL);
                      } catch (t) {}
                    })(Object);
                })(w.URLSearchParams.prototype);
                var O = w.URLSearchParams,
                  b = function (t) {
                    return new O(t).get('mgnlPreviewAsVisitor');
                  },
                  S = {
                    isPreviewAsVisitor: b,
                    getPersonalizationParams: function (t) {
                      var c = {};
                      if (!P.inIframe()) return c;
                      for (var u, l = new O(t).entries(), y = l.next(); !y.done; ) {
                        var _ = y.value[0],
                          v = y.value[1];
                        _.startsWith('preview') && (c[_] = ((u = v), 'undefined' == typeof decodeURIComponent ? u : decodeURIComponent(u))), (y = l.next());
                      }
                      return b(t) ? (c.mgnlPreviewAsVisitor = 'true') : (c.variants = 'all'), c;
                    },
                    toSearchQuery: function (t) {
                      var c = Object.keys(t)
                        .map(function (c) {
                          return ''.concat(c, '=').concat(((u = t[c]), 'undefined' == typeof encodeURIComponent ? u : encodeURIComponent(u)));
                          var u;
                        })
                        .join('&');
                      return c ? '?'.concat(c) : '';
                    },
                    getVariant: function (t, c) {
                      return P.inEditor() && t && t['jcr:mixinTypes'] && t['jcr:mixinTypes'].includes('mgnl:hasVariant')
                        ? (function (t, c) {
                            if (!t || !c) return t;
                            var u = c[t['@path']].match(/selectedVariant="(.+)"/)[1];
                            return u === t['@name'] ? t : t[u];
                          })(t, c)
                        : t;
                    },
                  };
              },
            ]);
          },
          297: c => {
            'use strict';
            c.exports = t;
          },
        },
        u = {};
      function __webpack_require__(t) {
        var l = u[t];
        if (void 0 !== l) return l.exports;
        var y = (u[t] = { exports: {} });
        return c[t].call(y.exports, y, y.exports, __webpack_require__), y.exports;
      }
      (__webpack_require__.n = t => {
        var c = t && t.__esModule ? () => t.default : () => t;
        return __webpack_require__.d(c, { a: c }), c;
      }),
        (__webpack_require__.d = (t, c) => {
          for (var u in c) __webpack_require__.o(c, u) && !__webpack_require__.o(t, u) && Object.defineProperty(t, u, { enumerable: !0, get: c[u] });
        }),
        (__webpack_require__.o = (t, c) => Object.prototype.hasOwnProperty.call(t, c)),
        (__webpack_require__.r = t => {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 });
        });
      var l = {};
      return (
        (() => {
          'use strict';
          __webpack_require__.r(l),
            __webpack_require__.d(l, {
              ComponentHelper: () => w,
              EditableArea: () => k,
              EditableComponent: () => j,
              EditablePage: () => T,
              EditorContext: () => P,
              EditorContextHelper: () => O,
              PersonalizationService: () => S,
              RendererContext: () => A,
            });
          var t = __webpack_require__(297),
            c = __webpack_require__.n(t),
            u = __webpack_require__(697),
            y = __webpack_require__.n(u),
            _ = __webpack_require__(36),
            v = c().createContext(),
            E = v.Provider;
          v.Consumer;
          const P = v,
            C = { CLOSED_AREA_COMMENT: '/cms:area', CLOSED_COMPONENT_COMMENT: '/cms:component', TEMPLATE_ID_PROP: 'mgnl:template' };
          function _toConsumableArray(t) {
            return (
              (function _arrayWithoutHoles(t) {
                if (Array.isArray(t)) return _arrayLikeToArray(t);
              })(t) ||
              (function _iterableToArray(t) {
                if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
              })(t) ||
              (function _unsupportedIterableToArray(t, c) {
                if (!t) return;
                if ('string' == typeof t) return _arrayLikeToArray(t, c);
                var u = Object.prototype.toString.call(t).slice(8, -1);
                'Object' === u && t.constructor && (u = t.constructor.name);
                if ('Map' === u || 'Set' === u) return Array.from(t);
                if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return _arrayLikeToArray(t, c);
              })(t) ||
              (function _nonIterableSpread() {
                throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
              })()
            );
          }
          function _arrayLikeToArray(t, c) {
            (null == c || c > t.length) && (c = t.length);
            for (var u = 0, l = new Array(c); u < c; u++) l[u] = t[u];
            return l;
          }
          function _typeof(t) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function _typeof(t) {
                    return typeof t;
                  }
                : function _typeof(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  })(t);
          }
          const w = (function componentHelper() {
              return {
                getRenderedComponent: function getRenderedComponent(t, u) {
                  if (!t || !u) return c().createElement('div');
                  var l = u[t[C.TEMPLATE_ID_PROP]];
                  if (!l) return _.LoggerService.error('Component with ID '.concat(t[C.TEMPLATE_ID_PROP], ' is not mapped.')), c().createElement('div');
                  return c().createElement(l, getComponentProperties(t));
                },
                getComponentProperties,
                addComment: function addComment(t, c, u) {
                  if ('undefined' == typeof document || !t) return;
                  if (c) {
                    var l = document.createComment(c);
                    t.insertBefore(l, t.firstChild);
                  }
                  if (u) {
                    var y = document.createComment(u);
                    t.appendChild(y);
                  }
                },
                classnames: function classnames() {
                  for (var t = [], c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
                  return (
                    u.forEach(function (c) {
                      if (null != c) {
                        var u = _typeof(c);
                        'string' === u || 'number' === u
                          ? t.push(c)
                          : Array.isArray(c) && c.length
                          ? t.push(classnames.apply(void 0, _toConsumableArray(c)))
                          : 'object' === u &&
                            Object.keys(c).forEach(function (u) {
                              c[u] && t.push(u);
                            });
                      }
                    }),
                    t.join(' ')
                  );
                },
              };
              function getComponentProperties(t) {
                if (!t || 'object' !== _typeof(t)) return {};
                var c = {},
                  u = {};
                return (
                  Object.keys(t).forEach(function (l) {
                    l.startsWith('@') || l.startsWith('mgnl:') || l.startsWith('jcr:') ? (u[l] = t[l]) : (c[l] = t[l]);
                  }),
                  (c.metadata = u),
                  c
                );
              }
            })(),
            O = _.EditorContextHelper,
            S = _.PersonalizationService;
          var A = P;
          function EditablePage_typeof(t) {
            return (EditablePage_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function _typeof(t) {
                    return typeof t;
                  }
                : function _typeof(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  })(t);
          }
          function _classCallCheck(t, c) {
            if (!(t instanceof c)) throw new TypeError('Cannot call a class as a function');
          }
          function _defineProperties(t, c) {
            for (var u = 0; u < c.length; u++) {
              var l = c[u];
              (l.enumerable = l.enumerable || !1), (l.configurable = !0), 'value' in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
            }
          }
          function _setPrototypeOf(t, c) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(t, c) {
                return (t.__proto__ = c), t;
              })(t, c);
          }
          function _createSuper(t) {
            var c = (function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (t) {
                return !1;
              }
            })();
            return function _createSuperInternal() {
              var u,
                l = _getPrototypeOf(t);
              if (c) {
                var y = _getPrototypeOf(this).constructor;
                u = Reflect.construct(l, arguments, y);
              } else u = l.apply(this, arguments);
              return _possibleConstructorReturn(this, u);
            };
          }
          function _possibleConstructorReturn(t, c) {
            return !c || ('object' !== EditablePage_typeof(c) && 'function' != typeof c)
              ? (function _assertThisInitialized(t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(t)
              : c;
          }
          function _getPrototypeOf(t) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function _defineProperty(t, c, u) {
            return c in t ? Object.defineProperty(t, c, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (t[c] = u), t;
          }
          var R = (function (t) {
            !(function _inherits(t, c) {
              if ('function' != typeof c && null !== c) throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(c && c.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), c && _setPrototypeOf(t, c);
            })(EditablePage, t);
            var u = _createSuper(EditablePage);
            function EditablePage() {
              return _classCallCheck(this, EditablePage), u.apply(this, arguments);
            }
            return (
              (function _createClass(t, c, u) {
                return c && _defineProperties(t.prototype, c), u && _defineProperties(t, u), t;
              })(EditablePage, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.addComment(), O.onFrameReady(), O.refresh();
                  },
                },
                {
                  key: 'UNSAFE_componentWillUpdate',
                  value: function UNSAFE_componentWillUpdate() {
                    this.node.firstChild.remove();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate() {
                    this.addComment(), O.onFrameReady(), O.refresh();
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var t = this.getContextValue();
                    this.node &&
                      t.content &&
                      (t.templateDefinitions
                        ? w.addComment(this.node, _.TemplateAnnotations.getPageCommentString(t.content, t.templateDefinitions[t.content[C.TEMPLATE_ID_PROP]]))
                        : t.templateAnnotations && w.addComment(this.node, t.templateAnnotations[t.content['@path']]));
                  },
                },
                {
                  key: 'getContextValue',
                  value: function getContextValue() {
                    var t = this.props,
                      c = t.templateDefinitions,
                      u = t.templateAnnotations,
                      l = t.content;
                    return { templateDefinitions: c, templateAnnotations: u, componentMappings: t.config.componentMappings, content: l, isDevMode: !1 };
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var t = this,
                      u = this.getContextValue(),
                      l = this.props.children,
                      y = u.content,
                      _ = u.templateAnnotations,
                      v = _ ? S.getVariant(y, _) : y,
                      P = l || w.getRenderedComponent(v, u.componentMappings);
                    return c().createElement(
                      E,
                      { value: u },
                      c().createElement(
                        'div',
                        {
                          ref: function ref(c) {
                            return (t.node = c);
                          },
                          key: u.content['@id'],
                        },
                        P,
                      ),
                    );
                  },
                },
              ]),
              EditablePage
            );
          })(c().PureComponent);
          _defineProperty(R, 'propTypes', {
            children: y().elementType,
            content: y().object,
            templateDefinitions: y().object,
            templateAnnotations: y().object,
            config: y().shape({ componentMappings: y().object }),
          }),
            _defineProperty(R, 'defaultProps', { children: null, content: null, templateDefinitions: null, templateAnnotations: null, config: { componentMappings: {} } });
          const T = R;
          function EditableComponent_typeof(t) {
            return (EditableComponent_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function _typeof(t) {
                    return typeof t;
                  }
                : function _typeof(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  })(t);
          }
          function EditableComponent_defineProperties(t, c) {
            for (var u = 0; u < c.length; u++) {
              var l = c[u];
              (l.enumerable = l.enumerable || !1), (l.configurable = !0), 'value' in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
            }
          }
          function EditableComponent_setPrototypeOf(t, c) {
            return (EditableComponent_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(t, c) {
                return (t.__proto__ = c), t;
              })(t, c);
          }
          function EditableComponent_createSuper(t) {
            var c = (function EditableComponent_isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (t) {
                return !1;
              }
            })();
            return function _createSuperInternal() {
              var u,
                l = EditableComponent_getPrototypeOf(t);
              if (c) {
                var y = EditableComponent_getPrototypeOf(this).constructor;
                u = Reflect.construct(l, arguments, y);
              } else u = l.apply(this, arguments);
              return EditableComponent_possibleConstructorReturn(this, u);
            };
          }
          function EditableComponent_possibleConstructorReturn(t, c) {
            return !c || ('object' !== EditableComponent_typeof(c) && 'function' != typeof c)
              ? (function EditableComponent_assertThisInitialized(t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(t)
              : c;
          }
          function EditableComponent_getPrototypeOf(t) {
            return (EditableComponent_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function EditableComponent_defineProperty(t, c, u) {
            return c in t ? Object.defineProperty(t, c, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (t[c] = u), t;
          }
          var j = (function (t) {
            !(function EditableComponent_inherits(t, c) {
              if ('function' != typeof c && null !== c) throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(c && c.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), c && EditableComponent_setPrototypeOf(t, c);
            })(EditableComponent, t);
            var u = EditableComponent_createSuper(EditableComponent);
            function EditableComponent(t) {
              var c;
              return (
                (function EditableComponent_classCallCheck(t, c) {
                  if (!(t instanceof c)) throw new TypeError('Cannot call a class as a function');
                })(this, EditableComponent),
                ((c = u.call(this, t)).constants = C),
                c
              );
            }
            return (
              (function EditableComponent_createClass(t, c, u) {
                return c && EditableComponent_defineProperties(t.prototype, c), u && EditableComponent_defineProperties(t, u), t;
              })(EditableComponent, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.addComment(), this.removeRefs();
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var t = this.context.isDevMode,
                      c = this.props.content;
                    if (this.openNode && this.closeNode && (t || O.inEditor())) {
                      var u = c[C.TEMPLATE_ID_PROP],
                        l = this.context,
                        y = l.templateDefinitions,
                        v = l.templateAnnotations;
                      y
                        ? (this.openNode.parentNode.insertBefore(document.createComment(_.TemplateAnnotations.getComponentCommentString(c, y[u])), this.openNode),
                          this.closeNode.parentNode.insertBefore(document.createComment(this.constants.CLOSED_COMPONENT_COMMENT), this.closeNode.nextSibling))
                        : v &&
                          (this.openNode.parentNode.insertBefore(document.createComment(v[c['@path']]), this.openNode),
                          this.closeNode.parentNode.insertBefore(document.createComment(this.constants.CLOSED_COMPONENT_COMMENT), this.closeNode.nextSibling));
                    }
                  },
                },
                {
                  key: 'removeRefs',
                  value: function removeRefs() {
                    this.openNode && this.closeNode && (this.openNode.remove(), this.closeNode.remove());
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var t = this,
                      u = this.props.content,
                      l = this.context,
                      y = l.componentMappings,
                      _ = l.templateAnnotations,
                      v = _ ? S.getVariant(u, _) : u,
                      E = w.getRenderedComponent(v, y);
                    return c().createElement(
                      c().Fragment,
                      null,
                      c().createElement('div', {
                        ref: function ref(c) {
                          return (t.openNode = c);
                        },
                      }),
                      E,
                      c().createElement('div', {
                        ref: function ref(c) {
                          return (t.closeNode = c);
                        },
                      }),
                    );
                  },
                },
              ]),
              EditableComponent
            );
          })(c().PureComponent);
          function EditableArea_typeof(t) {
            return (EditableArea_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function _typeof(t) {
                    return typeof t;
                  }
                : function _typeof(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  })(t);
          }
          function EditableArea_defineProperties(t, c) {
            for (var u = 0; u < c.length; u++) {
              var l = c[u];
              (l.enumerable = l.enumerable || !1), (l.configurable = !0), 'value' in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
            }
          }
          function EditableArea_setPrototypeOf(t, c) {
            return (EditableArea_setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(t, c) {
                return (t.__proto__ = c), t;
              })(t, c);
          }
          function EditableArea_createSuper(t) {
            var c = (function EditableArea_isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
              } catch (t) {
                return !1;
              }
            })();
            return function _createSuperInternal() {
              var u,
                l = EditableArea_getPrototypeOf(t);
              if (c) {
                var y = EditableArea_getPrototypeOf(this).constructor;
                u = Reflect.construct(l, arguments, y);
              } else u = l.apply(this, arguments);
              return EditableArea_possibleConstructorReturn(this, u);
            };
          }
          function EditableArea_possibleConstructorReturn(t, c) {
            return !c || ('object' !== EditableArea_typeof(c) && 'function' != typeof c)
              ? (function EditableArea_assertThisInitialized(t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
                })(t)
              : c;
          }
          function EditableArea_getPrototypeOf(t) {
            return (EditableArea_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
          }
          function EditableArea_defineProperty(t, c, u) {
            return c in t ? Object.defineProperty(t, c, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : (t[c] = u), t;
          }
          EditableComponent_defineProperty(j, 'propTypes', { content: y().object.isRequired }), EditableComponent_defineProperty(j, 'contextType', P);
          var x = (function (t) {
            !(function EditableArea_inherits(t, c) {
              if ('function' != typeof c && null !== c) throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(c && c.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), c && EditableArea_setPrototypeOf(t, c);
            })(EditableArea, t);
            var u = EditableArea_createSuper(EditableArea);
            function EditableArea(t) {
              var c;
              return (
                (function EditableArea_classCallCheck(t, c) {
                  if (!(t instanceof c)) throw new TypeError('Cannot call a class as a function');
                })(this, EditableArea),
                ((c = u.call(this, t)).constants = C),
                c
              );
            }
            return (
              (function EditableArea_createClass(t, c, u) {
                return c && EditableArea_defineProperties(t.prototype, c), u && EditableArea_defineProperties(t, u), t;
              })(EditableArea, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    if (!this.context) throw new Error('EditableArea component must be wrapped inside EditablePage component.');
                    this.addComment(), O.refresh();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate() {
                    O.refresh();
                  },
                },
                {
                  key: 'getParentTemplateId',
                  value: function getParentTemplateId() {
                    var t = this.props.parentTemplateId,
                      c = this.context.content;
                    return t || c[C.TEMPLATE_ID_PROP];
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var t = this.context.isDevMode,
                      c = this.props.content;
                    if (this.node && (t || O.inEditor())) {
                      var u = this.getParentTemplateId(),
                        l = this.context,
                        y = l.templateDefinitions,
                        v = l.templateAnnotations,
                        E = y ? _.TemplateAnnotations.getAreaCommentString(c, y[u]) : v[c['@path']];
                      this.node.parentNode.insertBefore(document.createComment(E), this.node),
                        this.node.parentNode.insertBefore(document.createComment(this.constants.CLOSED_AREA_COMMENT), this.node.nextSibling);
                    }
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var t,
                      u = this,
                      l = this.props,
                      y = l.content,
                      _ = l.className,
                      v = l.elementType,
                      E = l.children,
                      P = l.customView,
                      C = y['@nodes'].map(function (t) {
                        return y[t];
                      }),
                      O = c().createElement(v || 'div');
                    return (
                      (t = P
                        ? c().createElement(P, { content: y })
                        : E
                        ? c().Children.map(E, function (t) {
                            return c().isValidElement(t) ? c().cloneElement(t, { content: y }) : t;
                          })
                        : C.map(function (t) {
                            return c().createElement(j, { key: t['@id'], content: t });
                          })),
                      c().createElement(
                        O.type,
                        {
                          ref: function ref(t) {
                            return (u.node = t);
                          },
                          key: y['@id'],
                          className: w.classnames(_),
                        },
                        t,
                      )
                    );
                  },
                },
              ]),
              EditableArea
            );
          })(c().PureComponent);
          EditableArea_defineProperty(x, 'propTypes', {
            content: y().object.isRequired,
            parentTemplateId: y().string,
            className: y().any,
            elementType: y().string,
            customView: y().elementType,
            children: y().node,
          }),
            EditableArea_defineProperty(x, 'defaultProps', { parentTemplateId: null, className: null, elementType: 'div', customView: null, children: null }),
            EditableArea_defineProperty(x, 'contextType', P);
          const k = x;
        })(),
        l
      );
    })();
  });
  //# sourceMappingURL=mgnl-react-editor.min.js.map
});

const mgnlReactEditor_min$1 = /*@__PURE__*/ getDefaultExportFromCjs(mgnlReactEditor_min);

var mgnlReactEditor = createCommonjsModule(function (module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if ('object' === 'object' && 'object' === 'object') module.exports = factory(react);
    else if (typeof undefined === 'function' && undefined.amd) undefined(['react'], factory);
    else {
      var a = 'object' === 'object' ? factory(react) : factory(root['react']);
      for (var i in a) ('object' === 'object' ? exports : root)[i] = a[i];
    }
  })(commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_react__) {
    return /******/ (() => {
      // webpackBootstrap
      /******/ var __webpack_modules__ = {
        /***/ './src/component/EditableArea/EditableArea.js':
          /*!****************************************************!*\
  !*** ./src/component/EditableArea/EditableArea.js ***!
  \****************************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react');
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ './node_modules/prop-types/index.js');
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__,
            );
            /* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../EditableComponent */ './src/component/EditableComponent/index.js',
            );
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ './src/util/index.js');
            function _typeof(obj) {
              '@babel/helpers - typeof';
              if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                };
              }
              return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function');
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };
              return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }

            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                return call;
              }
              return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }

            function _isNativeReflectConstruct() {
              if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === 'function') return true;
              try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  };
              return _getPrototypeOf(o);
            }

            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }

            /* eslint-disable import/no-extraneous-dependencies */

            var EditableArea = /*#__PURE__*/ (function (_React$PureComponent) {
              _inherits(EditableArea, _React$PureComponent);

              var _super = _createSuper(EditableArea);

              function EditableArea(props) {
                var _this;

                _classCallCheck(this, EditableArea);

                _this = _super.call(this, props);
                _this.constants = _util__WEBPACK_IMPORTED_MODULE_4__.constants;
                return _this;
              }

              _createClass(EditableArea, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    if (!this.context) {
                      throw new Error('EditableArea component must be wrapped inside EditablePage component.');
                    }

                    this.addComment();
                    _util__WEBPACK_IMPORTED_MODULE_4__.EditorContextHelper.refresh();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate() {
                    _util__WEBPACK_IMPORTED_MODULE_4__.EditorContextHelper.refresh();
                  },
                },
                {
                  key: 'getParentTemplateId',
                  value: function getParentTemplateId() {
                    var parentTemplateId = this.props.parentTemplateId;
                    var content = this.context.content;
                    return parentTemplateId || content[_util__WEBPACK_IMPORTED_MODULE_4__.constants.TEMPLATE_ID_PROP];
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var isDevMode = this.context.isDevMode;
                    var content = this.props.content;

                    if (!this.node || (!isDevMode && !_util__WEBPACK_IMPORTED_MODULE_4__.EditorContextHelper.inEditor())) {
                      return;
                    }

                    var pageTemplateId = this.getParentTemplateId();
                    var _this$context = this.context,
                      templateDefinitions = _this$context.templateDefinitions,
                      templateAnnotations = _this$context.templateAnnotations;
                    var openComment = templateDefinitions
                      ? _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__.TemplateAnnotations.getAreaCommentString(content, templateDefinitions[pageTemplateId])
                      : templateAnnotations[content['@path']];
                    this.node.parentNode.insertBefore(document.createComment(openComment), this.node);
                    this.node.parentNode.insertBefore(document.createComment(this.constants.CLOSED_AREA_COMMENT), this.node.nextSibling);
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var _this2 = this;

                    var _this$props = this.props,
                      content = _this$props.content,
                      className = _this$props.className,
                      elementType = _this$props.elementType,
                      children = _this$props.children,
                      CustomView = _this$props.customView;
                    var componentContents = content['@nodes'].map(function (nodeName) {
                      return content[nodeName];
                    });
                    var element = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(elementType || 'div');
                    var childContent;

                    if (CustomView) {
                      childContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomView, {
                        content: content,
                      });
                    } else if (children) {
                      childContent = react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
                        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
                          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
                            content: content,
                          });
                        }

                        return child;
                      });
                    } else {
                      childContent = componentContents.map(function (item) {
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EditableComponent__WEBPACK_IMPORTED_MODULE_3__.EditableComponent, {
                          key: item['@id'],
                          content: item,
                        });
                      });
                    }

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      element.type,
                      {
                        ref: function ref(node) {
                          return (_this2.node = node);
                        },
                        key: content['@id'],
                        className: _util__WEBPACK_IMPORTED_MODULE_4__.ComponentHelper.classnames(className),
                      },
                      childContent,
                    );
                  },
                },
              ]);

              return EditableArea;
            })(react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent);

            _defineProperty(EditableArea, 'propTypes', {
              content: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired,
              parentTemplateId: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
              className: prop_types__WEBPACK_IMPORTED_MODULE_1___default().any,
              elementType: prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,
              customView: prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,
              children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().node,
            });

            _defineProperty(EditableArea, 'defaultProps', {
              parentTemplateId: null,
              className: null,
              elementType: 'div',
              customView: null,
              children: null,
            });

            _defineProperty(EditableArea, 'contextType', _util__WEBPACK_IMPORTED_MODULE_4__.EditorContext);

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = EditableArea;

            /***/
          },

        /***/ './src/component/EditableArea/index.js':
          /*!*********************************************!*\
  !*** ./src/component/EditableArea/index.js ***!
  \*********************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ EditableArea: () => /* reexport safe */ _EditableArea__WEBPACK_IMPORTED_MODULE_0__.default,
              /* harmony export */
            });
            /* harmony import */ var _EditableArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableArea */ './src/component/EditableArea/EditableArea.js');

            /***/
          },

        /***/ './src/component/EditableComponent/EditableComponent.js':
          /*!**************************************************************!*\
  !*** ./src/component/EditableComponent/EditableComponent.js ***!
  \**************************************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ EditableComponent,
              /* harmony export */
            });
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react');
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ './node_modules/prop-types/index.js');
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__,
            );
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ './src/util/index.js');
            function _typeof(obj) {
              '@babel/helpers - typeof';
              if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                };
              }
              return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function');
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };
              return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }

            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                return call;
              }
              return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }

            function _isNativeReflectConstruct() {
              if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === 'function') return true;
              try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  };
              return _getPrototypeOf(o);
            }

            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }

            /* eslint-disable import/no-extraneous-dependencies */

            var EditableComponent = /*#__PURE__*/ (function (_React$PureComponent) {
              _inherits(EditableComponent, _React$PureComponent);

              var _super = _createSuper(EditableComponent);

              function EditableComponent(props) {
                var _this;

                _classCallCheck(this, EditableComponent);

                _this = _super.call(this, props);
                _this.constants = _util__WEBPACK_IMPORTED_MODULE_3__.constants;
                return _this;
              }

              _createClass(EditableComponent, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.addComment();
                    this.removeRefs();
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var isDevMode = this.context.isDevMode;
                    var content = this.props.content;

                    if (!this.openNode || !this.closeNode || (!isDevMode && !_util__WEBPACK_IMPORTED_MODULE_3__.EditorContextHelper.inEditor())) {
                      return;
                    }

                    var pageTemplateId = content[_util__WEBPACK_IMPORTED_MODULE_3__.constants.TEMPLATE_ID_PROP];
                    var _this$context = this.context,
                      templateDefinitions = _this$context.templateDefinitions,
                      templateAnnotations = _this$context.templateAnnotations;

                    if (templateDefinitions) {
                      this.openNode.parentNode.insertBefore(
                        document.createComment(
                          _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__.TemplateAnnotations.getComponentCommentString(content, templateDefinitions[pageTemplateId]),
                        ),
                        this.openNode,
                      );
                      this.closeNode.parentNode.insertBefore(document.createComment(this.constants.CLOSED_COMPONENT_COMMENT), this.closeNode.nextSibling);
                    } else if (templateAnnotations) {
                      this.openNode.parentNode.insertBefore(document.createComment(templateAnnotations[content['@path']]), this.openNode);
                      this.closeNode.parentNode.insertBefore(document.createComment(this.constants.CLOSED_COMPONENT_COMMENT), this.closeNode.nextSibling);
                    }
                  },
                },
                {
                  key: 'removeRefs',
                  value: function removeRefs() {
                    if (!this.openNode || !this.closeNode) {
                      return;
                    }

                    this.openNode.remove();
                    this.closeNode.remove();
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var _this2 = this;

                    var content = this.props.content;
                    var _this$context2 = this.context,
                      componentMappings = _this$context2.componentMappings,
                      templateAnnotations = _this$context2.templateAnnotations;
                    var renderingContent = templateAnnotations ? _util__WEBPACK_IMPORTED_MODULE_3__.PersonalizationService.getVariant(content, templateAnnotations) : content;
                    var component = _util__WEBPACK_IMPORTED_MODULE_3__.ComponentHelper.getRenderedComponent(renderingContent, componentMappings);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      react__WEBPACK_IMPORTED_MODULE_0___default().Fragment,
                      null,
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                        ref: function ref(node) {
                          return (_this2.openNode = node);
                        },
                      }),
                      component,
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                        ref: function ref(node) {
                          return (_this2.closeNode = node);
                        },
                      }),
                    );
                  },
                },
              ]);

              return EditableComponent;
            })(react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent);

            _defineProperty(EditableComponent, 'propTypes', {
              content: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired,
            });

            _defineProperty(EditableComponent, 'contextType', _util__WEBPACK_IMPORTED_MODULE_3__.EditorContext);

            /***/
          },

        /***/ './src/component/EditableComponent/index.js':
          /*!**************************************************!*\
  !*** ./src/component/EditableComponent/index.js ***!
  \**************************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ EditableComponent: () => /* reexport safe */ _EditableComponent__WEBPACK_IMPORTED_MODULE_0__.default,
              /* harmony export */
            });
            /* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./EditableComponent */ './src/component/EditableComponent/EditableComponent.js',
            );

            /***/
          },

        /***/ './src/component/EditablePage/EditablePage.js':
          /*!****************************************************!*\
  !*** ./src/component/EditablePage/EditablePage.js ***!
  \****************************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react');
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ './node_modules/prop-types/index.js');
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__,
            );
            /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ './src/util/index.js');
            function _typeof(obj) {
              '@babel/helpers - typeof';
              if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                };
              }
              return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
              }
            }

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== 'function' && superClass !== null) {
                throw new TypeError('Super expression must either be null or a function');
              }
              subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
              if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };
              return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
              var hasNativeReflectConstruct = _isNativeReflectConstruct();
              return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                  result;
                if (hasNativeReflectConstruct) {
                  var NewTarget = _getPrototypeOf(this).constructor;
                  result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                  result = Super.apply(this, arguments);
                }
                return _possibleConstructorReturn(this, result);
              };
            }

            function _possibleConstructorReturn(self, call) {
              if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
                return call;
              }
              return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
              if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return self;
            }

            function _isNativeReflectConstruct() {
              if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if (typeof Proxy === 'function') return true;
              try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }

            function _getPrototypeOf(o) {
              _getPrototypeOf = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                  };
              return _getPrototypeOf(o);
            }

            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }

            /* eslint-disable import/no-extraneous-dependencies */

            var EditablePage = /*#__PURE__*/ (function (_React$PureComponent) {
              _inherits(EditablePage, _React$PureComponent);

              var _super = _createSuper(EditablePage);

              function EditablePage() {
                _classCallCheck(this, EditablePage);

                return _super.apply(this, arguments);
              }

              _createClass(EditablePage, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.addComment();
                    _util__WEBPACK_IMPORTED_MODULE_3__.EditorContextHelper.onFrameReady();
                    _util__WEBPACK_IMPORTED_MODULE_3__.EditorContextHelper.refresh();
                  }, // eslint-disable-next-line camelcase
                },
                {
                  key: 'UNSAFE_componentWillUpdate',
                  value: function UNSAFE_componentWillUpdate() {
                    this.node.firstChild.remove();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function componentDidUpdate() {
                    this.addComment();
                    _util__WEBPACK_IMPORTED_MODULE_3__.EditorContextHelper.onFrameReady();
                    _util__WEBPACK_IMPORTED_MODULE_3__.EditorContextHelper.refresh();
                  },
                },
                {
                  key: 'addComment',
                  value: function addComment() {
                    var contextValue = this.getContextValue();

                    if (!this.node) {
                      return;
                    }

                    if (contextValue.content) {
                      if (contextValue.templateDefinitions) {
                        _util__WEBPACK_IMPORTED_MODULE_3__.ComponentHelper.addComment(
                          this.node,
                          _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_2__.TemplateAnnotations.getPageCommentString(
                            contextValue.content,
                            contextValue.templateDefinitions[contextValue.content[_util__WEBPACK_IMPORTED_MODULE_3__.constants.TEMPLATE_ID_PROP]],
                          ),
                        );
                      } else if (contextValue.templateAnnotations) {
                        _util__WEBPACK_IMPORTED_MODULE_3__.ComponentHelper.addComment(this.node, contextValue.templateAnnotations[contextValue.content['@path']]);
                      }
                    }
                  },
                },
                {
                  key: 'getContextValue',
                  value: function getContextValue() {
                    var _this$props = this.props,
                      templateDefinitions = _this$props.templateDefinitions,
                      templateAnnotations = _this$props.templateAnnotations,
                      content = _this$props.content,
                      config = _this$props.config;
                    var componentMappings = config.componentMappings;
                    var isDevMode = 'development' === 'development';
                    var contextValue = {
                      templateDefinitions: templateDefinitions,
                      templateAnnotations: templateAnnotations,
                      componentMappings: componentMappings,
                      content: content,
                      isDevMode: isDevMode,
                    };
                    return contextValue;
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    var _this = this;

                    var contextValue = this.getContextValue();
                    var children = this.props.children;
                    var content = contextValue.content,
                      templateAnnotations = contextValue.templateAnnotations;
                    var renderingContent = templateAnnotations ? _util__WEBPACK_IMPORTED_MODULE_3__.PersonalizationService.getVariant(content, templateAnnotations) : content;
                    var pageComponent = children || _util__WEBPACK_IMPORTED_MODULE_3__.ComponentHelper.getRenderedComponent(renderingContent, contextValue.componentMappings); // NOTE: We need a div tag as a parent node for Page's child HTML. It will cause an issue if we
                    // don't have a parent node.

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                      _util__WEBPACK_IMPORTED_MODULE_3__.EditorProvider,
                      {
                        value: contextValue,
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        'div',
                        {
                          ref: function ref(node) {
                            return (_this.node = node);
                          },
                          key: contextValue.content['@id'],
                        },
                        pageComponent,
                      ),
                    );
                  },
                },
              ]);

              return EditablePage;
            })(react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent);

            _defineProperty(EditablePage, 'propTypes', {
              children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType,
              content: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,
              templateDefinitions: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,
              templateAnnotations: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,
              config: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
                componentMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().object,
              }),
            });

            _defineProperty(EditablePage, 'defaultProps', {
              children: null,
              content: null,
              templateDefinitions: null,
              templateAnnotations: null,
              config: {
                componentMappings: {},
              },
            });

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = EditablePage;

            /***/
          },

        /***/ './src/component/EditablePage/index.js':
          /*!*********************************************!*\
  !*** ./src/component/EditablePage/index.js ***!
  \*********************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ EditablePage: () => /* reexport safe */ _EditablePage__WEBPACK_IMPORTED_MODULE_0__.default,
              /* harmony export */
            });
            /* harmony import */ var _EditablePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditablePage */ './src/component/EditablePage/EditablePage.js');

            /***/
          },

        /***/ './src/component/index.js':
          /*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ EditablePage: () => /* reexport safe */ _EditablePage__WEBPACK_IMPORTED_MODULE_0__.EditablePage,
              /* harmony export */ EditableArea: () => /* reexport safe */ _EditableArea__WEBPACK_IMPORTED_MODULE_1__.EditableArea,
              /* harmony export */ EditableComponent: () => /* reexport safe */ _EditableComponent__WEBPACK_IMPORTED_MODULE_2__.EditableComponent,
              /* harmony export */
            });
            /* harmony import */ var _EditablePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditablePage */ './src/component/EditablePage/index.js');
            /* harmony import */ var _EditableArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableArea */ './src/component/EditableArea/index.js');
            /* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableComponent */ './src/component/EditableComponent/index.js');

            /***/
          },

        /***/ './src/util/ComponentHelper.js':
          /*!*************************************!*\
  !*** ./src/util/ComponentHelper.js ***!
  \*************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react');
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__,
            );
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ './src/util/constants.js');
            function _toConsumableArray(arr) {
              return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
            }

            function _nonIterableSpread() {
              throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            }

            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === 'Object' && o.constructor) n = o.constructor.name;
              if (n === 'Map' || n === 'Set') return Array.from(o);
              if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _iterableToArray(iter) {
              if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null) return Array.from(iter);
            }

            function _arrayWithoutHoles(arr) {
              if (Array.isArray(arr)) return _arrayLikeToArray(arr);
            }

            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length) len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }

            function _typeof(obj) {
              '@babel/helpers - typeof';
              if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                _typeof = function _typeof(obj) {
                  return typeof obj;
                };
              } else {
                _typeof = function _typeof(obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                };
              }
              return _typeof(obj);
            }

            /* eslint-disable import/no-extraneous-dependencies */

            function componentHelper() {
              return {
                getRenderedComponent: getRenderedComponent,
                getComponentProperties: getComponentProperties,
                addComment: addComment,
                classnames: classnames,
              };

              function getRenderedComponent(componentContent, componentMappings) {
                if (!componentContent || !componentMappings) {
                  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div');
                }

                var componentClass = componentMappings[componentContent[_constants__WEBPACK_IMPORTED_MODULE_2__.default.TEMPLATE_ID_PROP]];

                if (!componentClass) {
                  _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_1__.LoggerService.error(
                    'Component with ID '.concat(componentContent[_constants__WEBPACK_IMPORTED_MODULE_2__.default.TEMPLATE_ID_PROP], ' is not mapped.'),
                  );
                  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div');
                }

                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(componentClass, getComponentProperties(componentContent));
              }

              function getComponentProperties(componentContent) {
                if (!componentContent || _typeof(componentContent) !== 'object') {
                  return {};
                }

                var props = {};
                var metadata = {};
                Object.keys(componentContent).forEach(function (key) {
                  if (key.startsWith('@') || key.startsWith('mgnl:') || key.startsWith('jcr:')) {
                    metadata[key] = componentContent[key];
                  } else {
                    props[key] = componentContent[key];
                  }
                });
                props.metadata = metadata;
                return props;
              }

              function addComment(element, openComment, closeComment) {
                if (typeof document === 'undefined' || !element) {
                  return;
                }

                if (openComment) {
                  var openCommentElement = document.createComment(openComment);
                  element.insertBefore(openCommentElement, element.firstChild);
                }

                if (closeComment) {
                  var closeCommentElement = document.createComment(closeComment);
                  element.appendChild(closeCommentElement);
                }
              }

              function classnames() {
                var classes = [];

                for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                  arg[_key] = arguments[_key];
                }

                arg.forEach(function (item) {
                  if (item == null) {
                    return;
                  }

                  var itemType = _typeof(item);

                  if (itemType === 'string' || itemType === 'number') {
                    classes.push(item);
                  } else if (Array.isArray(item) && item.length) {
                    classes.push(classnames.apply(void 0, _toConsumableArray(item)));
                  } else if (itemType === 'object') {
                    Object.keys(item).forEach(function (key) {
                      if (item[key]) {
                        classes.push(key);
                      }
                    });
                  }
                });
                return classes.join(' ');
              }
            }

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = componentHelper();

            /***/
          },

        /***/ './src/util/EditorContext.js':
          /*!***********************************!*\
  !*** ./src/util/EditorContext.js ***!
  \***********************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ EditorProvider: () => /* binding */ EditorProvider,
              /* harmony export */ EditorConsumer: () => /* binding */ EditorConsumer,
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react');
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

            var EditorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
            var EditorProvider = EditorContext.Provider;
            var EditorConsumer = EditorContext.Consumer;
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = EditorContext;

            /***/
          },

        /***/ './src/util/EditorContextHelper.js':
          /*!*****************************************!*\
  !*** ./src/util/EditorContextHelper.js ***!
  \*****************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__,
            );

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__.EditorContextHelper;

            /***/
          },

        /***/ './src/util/PersonalizationService.js':
          /*!********************************************!*\
  !*** ./src/util/PersonalizationService.js ***!
  \********************************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! @magnolia/template-annotations */ '../template-annotations/index.js',
            );
            /* harmony import */ var _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
              _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__,
            );

            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = _magnolia_template_annotations__WEBPACK_IMPORTED_MODULE_0__.PersonalizationService;

            /***/
          },

        /***/ './src/util/constants.js':
          /*!*******************************!*\
  !*** ./src/util/constants.js ***!
  \*******************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
              CLOSED_AREA_COMMENT: '/cms:area',
              CLOSED_COMPONENT_COMMENT: '/cms:component',
              TEMPLATE_ID_PROP: 'mgnl:template',
            };

            /***/
          },

        /***/ './src/util/index.js':
          /*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
          /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ constants: () => /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.default,
              /* harmony export */ ComponentHelper: () => /* reexport safe */ _ComponentHelper__WEBPACK_IMPORTED_MODULE_2__.default,
              /* harmony export */ EditorContext: () => /* reexport safe */ _EditorContext__WEBPACK_IMPORTED_MODULE_0__.default,
              /* harmony export */ EditorConsumer: () => /* reexport safe */ _EditorContext__WEBPACK_IMPORTED_MODULE_0__.EditorConsumer,
              /* harmony export */ EditorProvider: () => /* reexport safe */ _EditorContext__WEBPACK_IMPORTED_MODULE_0__.EditorProvider,
              /* harmony export */ RendererContext: () => /* binding */ RendererContext,
              /* harmony export */ EditorContextHelper: () => /* reexport safe */ _EditorContextHelper__WEBPACK_IMPORTED_MODULE_3__.default,
              /* harmony export */ PersonalizationService: () => /* reexport safe */ _PersonalizationService__WEBPACK_IMPORTED_MODULE_4__.default,
              /* harmony export */
            });
            /* harmony import */ var _EditorContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorContext */ './src/util/EditorContext.js');
            /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ './src/util/constants.js');
            /* harmony import */ var _ComponentHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentHelper */ './src/util/ComponentHelper.js');
            /* harmony import */ var _EditorContextHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorContextHelper */ './src/util/EditorContextHelper.js');
            /* harmony import */ var _PersonalizationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ./PersonalizationService */ './src/util/PersonalizationService.js',
            );

            /**
             * @deprecated RendererContext is deprecated. Use EditorContext instead
             */

            var RendererContext = _EditorContext__WEBPACK_IMPORTED_MODULE_0__.default;

            /***/
          },

        /***/ '../template-annotations/index.js':
          /*!****************************************!*\
  !*** ../template-annotations/index.js ***!
  \****************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            if (false) {
            } else {
              module.exports = __webpack_require__(/*! ./build/mgnl-service.js */ '../template-annotations/build/mgnl-service.js');
            }

            /***/
          },

        /***/ './node_modules/object-assign/index.js':
          /*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
          /***/ module => {
            'use strict';
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

            /* eslint-disable no-unused-vars */
            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
              if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
              }

              return Object(val);
            }

            function shouldUseNative() {
              try {
                if (!Object.assign) {
                  return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                  test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                  return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                  test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                  return false;
                }

                return true;
              } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
              }
            }

            module.exports = shouldUseNative()
              ? Object.assign
              : function (target, source) {
                  var from;
                  var to = toObject(target);
                  var symbols;

                  for (var s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);

                    for (var key in from) {
                      if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                      }
                    }

                    if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                          to[symbols[i]] = from[symbols[i]];
                        }
                      }
                    }
                  }

                  return to;
                };

            /***/
          },

        /***/ './node_modules/prop-types/checkPropTypes.js':
          /*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            var printWarning = function () {};

            if (true) {
              var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js');
              var loggedTypeFailures = {};
              var has = Function.call.bind(Object.prototype.hasOwnProperty);

              printWarning = function (text) {
                var message = 'Warning: ' + text;
                if (typeof console !== 'undefined') {
                  console.error(message);
                }
                try {
                  // --- Welcome to debugging React ---
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  throw new Error(message);
                } catch (x) {}
              };
            }

            /**
             * Assert that the values match with the type specs.
             * Error messages are memorized and will only be shown once.
             *
             * @param {object} typeSpecs Map of name to a ReactPropType
             * @param {object} values Runtime values that need to be type-checked
             * @param {string} location e.g. "prop", "context", "child context"
             * @param {string} componentName Name of the component for error messages.
             * @param {?Function} getStack Returns the component stack.
             * @private
             */
            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
              if (true) {
                for (var typeSpecName in typeSpecs) {
                  if (has(typeSpecs, typeSpecName)) {
                    var error;
                    // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.
                    try {
                      // This is intentionally an invariant that gets caught. It's the same
                      // behavior as without this statement except with a better message.
                      if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error(
                          (componentName || 'React class') +
                            ': ' +
                            location +
                            ' type `' +
                            typeSpecName +
                            '` is invalid; ' +
                            'it must be a function, usually from the `prop-types` package, but received `' +
                            typeof typeSpecs[typeSpecName] +
                            '`.',
                        );
                        err.name = 'Invariant Violation';
                        throw err;
                      }
                      error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                      error = ex;
                    }
                    if (error && !(error instanceof Error)) {
                      printWarning(
                        (componentName || 'React class') +
                          ': type specification of ' +
                          location +
                          ' `' +
                          typeSpecName +
                          '` is invalid; the type checker ' +
                          'function must return `null` or an `Error` but returned a ' +
                          typeof error +
                          '. ' +
                          'You may have forgotten to pass an argument to the type checker ' +
                          'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                          'shape all require an argument).',
                      );
                    }
                    if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                      // Only monitor this failure once because there tends to be a lot of the
                      // same error.
                      loggedTypeFailures[error.message] = true;

                      var stack = getStack ? getStack() : '';

                      printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                    }
                  }
                }
              }
            }

            /**
             * Resets warning cache when testing.
             *
             * @private
             */
            checkPropTypes.resetWarningCache = function () {
              if (true) {
                loggedTypeFailures = {};
              }
            };

            module.exports = checkPropTypes;

            /***/
          },

        /***/ './node_modules/prop-types/factoryWithTypeCheckers.js':
          /*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            var ReactIs = __webpack_require__(/*! react-is */ './node_modules/prop-types/node_modules/react-is/index.js');
            var assign = __webpack_require__(/*! object-assign */ './node_modules/object-assign/index.js');

            var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js');
            var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ './node_modules/prop-types/checkPropTypes.js');

            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            var printWarning = function () {};

            if (true) {
              printWarning = function (text) {
                var message = 'Warning: ' + text;
                if (typeof console !== 'undefined') {
                  console.error(message);
                }
                try {
                  // --- Welcome to debugging React ---
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  throw new Error(message);
                } catch (x) {}
              };
            }

            function emptyFunctionThatReturnsNull() {
              return null;
            }

            module.exports = function (isValidElement, throwOnDirectAccess) {
              /* global Symbol */
              var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
              var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

              /**
               * Returns the iterator method function contained on the iterable object.
               *
               * Be sure to invoke the function with the iterable as context:
               *
               *     var iteratorFn = getIteratorFn(myIterable);
               *     if (iteratorFn) {
               *       var iterator = iteratorFn.call(myIterable);
               *       ...
               *     }
               *
               * @param {?object} maybeIterable
               * @return {?function}
               */
              function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if (typeof iteratorFn === 'function') {
                  return iteratorFn;
                }
              }

              /**
               * Collection of methods that allow declaration and validation of props that are
               * supplied to React components. Example usage:
               *
               *   var Props = require('ReactPropTypes');
               *   var MyArticle = React.createClass({
               *     propTypes: {
               *       // An optional string prop named "description".
               *       description: Props.string,
               *
               *       // A required enum prop named "category".
               *       category: Props.oneOf(['News','Photos']).isRequired,
               *
               *       // A prop named "dialog" that requires an instance of Dialog.
               *       dialog: Props.instanceOf(Dialog).isRequired
               *     },
               *     render: function() { ... }
               *   });
               *
               * A more formal specification of how these methods are used:
               *
               *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
               *   decl := ReactPropTypes.{type}(.isRequired)?
               *
               * Each and every declaration produces a function with the same signature. This
               * allows the creation of custom validation functions. For example:
               *
               *  var MyLink = React.createClass({
               *    propTypes: {
               *      // An optional string or URI prop named "href".
               *      href: function(props, propName, componentName) {
               *        var propValue = props[propName];
               *        if (propValue != null && typeof propValue !== 'string' &&
               *            !(propValue instanceof URI)) {
               *          return new Error(
               *            'Expected a string or an URI for ' + propName + ' in ' +
               *            componentName
               *          );
               *        }
               *      }
               *    },
               *    render: function() {...}
               *  });
               *
               * @internal
               */

              var ANONYMOUS = '<<anonymous>>';

              // Important!
              // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
              var ReactPropTypes = {
                array: createPrimitiveTypeChecker('array'),
                bool: createPrimitiveTypeChecker('boolean'),
                func: createPrimitiveTypeChecker('function'),
                number: createPrimitiveTypeChecker('number'),
                object: createPrimitiveTypeChecker('object'),
                string: createPrimitiveTypeChecker('string'),
                symbol: createPrimitiveTypeChecker('symbol'),

                any: createAnyTypeChecker(),
                arrayOf: createArrayOfTypeChecker,
                element: createElementTypeChecker(),
                elementType: createElementTypeTypeChecker(),
                instanceOf: createInstanceTypeChecker,
                node: createNodeChecker(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker,
              };

              /**
               * inlined Object.is polyfill to avoid requiring consumers ship their own
               * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
               */
              /*eslint-disable no-self-compare*/
              function is(x, y) {
                // SameValue algorithm
                if (x === y) {
                  // Steps 1-5, 7-10
                  // Steps 6.b-6.e: +0 != -0
                  return x !== 0 || 1 / x === 1 / y;
                } else {
                  // Step 6.a: NaN == NaN
                  return x !== x && y !== y;
                }
              }
              /*eslint-enable no-self-compare*/

              /**
               * We use an Error-like object for backward compatibility as people may call
               * PropTypes directly and inspect their output. However, we don't use real
               * Errors anymore. We don't inspect their stack anyway, and creating them
               * is prohibitively expensive if they are created too often, such as what
               * happens in oneOfType() for any type before the one that matched.
               */
              function PropTypeError(message) {
                this.message = message;
                this.stack = '';
              }
              // Make `instanceof Error` still work for returned errors.
              PropTypeError.prototype = Error.prototype;

              function createChainableTypeChecker(validate) {
                if (true) {
                  var manualPropTypeCallCache = {};
                  var manualPropTypeWarningCount = 0;
                }
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                  componentName = componentName || ANONYMOUS;
                  propFullName = propFullName || propName;

                  if (secret !== ReactPropTypesSecret) {
                    if (throwOnDirectAccess) {
                      // New behavior only for users of `prop-types` package
                      var err = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                          'Use `PropTypes.checkPropTypes()` to call them. ' +
                          'Read more at http://fb.me/use-check-prop-types',
                      );
                      err.name = 'Invariant Violation';
                      throw err;
                    } else if (true && typeof console !== 'undefined') {
                      // Old behavior for people using React.PropTypes
                      var cacheKey = componentName + ':' + propName;
                      if (
                        !manualPropTypeCallCache[cacheKey] &&
                        // Avoid spamming the console because they are often not actionable except for lib authors
                        manualPropTypeWarningCount < 3
                      ) {
                        printWarning(
                          'You are manually calling a React.PropTypes validation ' +
                            'function for the `' +
                            propFullName +
                            '` prop on `' +
                            componentName +
                            '`. This is deprecated ' +
                            'and will throw in the standalone `prop-types` package. ' +
                            'You may be seeing this warning due to a third-party PropTypes ' +
                            'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                            'for details.',
                        );
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                      }
                    }
                  }
                  if (props[propName] == null) {
                    if (isRequired) {
                      if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                      }
                      return new PropTypeError(
                        'The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'),
                      );
                    }
                    return null;
                  } else {
                    return validate(props, propName, componentName, location, propFullName);
                  }
                }

                var chainedCheckType = checkType.bind(null, false);
                chainedCheckType.isRequired = checkType.bind(null, true);

                return chainedCheckType;
              }

              function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== expectedType) {
                    // `propValue` being instance of, say, date/regexp, pass the 'object'
                    // check, but we can offer a more precise error message here rather than
                    // 'of type `object`'.
                    var preciseType = getPreciseType(propValue);

                    return new PropTypeError(
                      'Invalid ' +
                        location +
                        ' `' +
                        propFullName +
                        '` of type ' +
                        ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') +
                        ('`' + expectedType + '`.'),
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createAnyTypeChecker() {
                return createChainableTypeChecker(emptyFunctionThatReturnsNull);
              }

              function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                  if (typeof typeChecker !== 'function') {
                    return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
                  }
                  var propValue = props[propName];
                  if (!Array.isArray(propValue)) {
                    var propType = getPropType(propValue);
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'),
                    );
                  }
                  for (var i = 0; i < propValue.length; i++) {
                    var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createElementTypeChecker() {
                function validate(props, propName, componentName, location, propFullName) {
                  var propValue = props[propName];
                  if (!isValidElement(propValue)) {
                    var propType = getPropType(propValue);
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'),
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createElementTypeTypeChecker() {
                function validate(props, propName, componentName, location, propFullName) {
                  var propValue = props[propName];
                  if (!ReactIs.isValidElementType(propValue)) {
                    var propType = getPropType(propValue);
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'),
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                  if (!(props[propName] instanceof expectedClass)) {
                    var expectedClassName = expectedClass.name || ANONYMOUS;
                    var actualClassName = getClassName(props[propName]);
                    return new PropTypeError(
                      'Invalid ' +
                        location +
                        ' `' +
                        propFullName +
                        '` of type ' +
                        ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') +
                        ('instance of `' + expectedClassName + '`.'),
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createEnumTypeChecker(expectedValues) {
                if (!Array.isArray(expectedValues)) {
                  if (true) {
                    if (arguments.length > 1) {
                      printWarning(
                        'Invalid arguments supplied to oneOf, expected an array, got ' +
                          arguments.length +
                          ' arguments. ' +
                          'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
                      );
                    } else {
                      printWarning('Invalid argument supplied to oneOf, expected an array.');
                    }
                  }
                  return emptyFunctionThatReturnsNull;
                }

                function validate(props, propName, componentName, location, propFullName) {
                  var propValue = props[propName];
                  for (var i = 0; i < expectedValues.length; i++) {
                    if (is(propValue, expectedValues[i])) {
                      return null;
                    }
                  }

                  var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                    var type = getPreciseType(value);
                    if (type === 'symbol') {
                      return String(value);
                    }
                    return value;
                  });
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of value `' +
                      String(propValue) +
                      '` ' +
                      ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'),
                  );
                }
                return createChainableTypeChecker(validate);
              }

              function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                  if (typeof typeChecker !== 'function') {
                    return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
                  }
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== 'object') {
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'),
                    );
                  }
                  for (var key in propValue) {
                    if (has(propValue, key)) {
                      var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                      if (error instanceof Error) {
                        return error;
                      }
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createUnionTypeChecker(arrayOfTypeCheckers) {
                if (!Array.isArray(arrayOfTypeCheckers)) {
                  true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
                  return emptyFunctionThatReturnsNull;
                }

                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                  var checker = arrayOfTypeCheckers[i];
                  if (typeof checker !== 'function') {
                    printWarning(
                      'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                        'received ' +
                        getPostfixForTypeWarning(checker) +
                        ' at index ' +
                        i +
                        '.',
                    );
                    return emptyFunctionThatReturnsNull;
                  }
                }

                function validate(props, propName, componentName, location, propFullName) {
                  for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                      return null;
                    }
                  }

                  return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
                }
                return createChainableTypeChecker(validate);
              }

              function createNodeChecker() {
                function validate(props, propName, componentName, location, propFullName) {
                  if (!isNode(props[propName])) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== 'object') {
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'),
                    );
                  }
                  for (var key in shapeTypes) {
                    var checker = shapeTypes[key];
                    if (!checker) {
                      continue;
                    }
                    var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error) {
                      return error;
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== 'object') {
                    return new PropTypeError(
                      'Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'),
                    );
                  }
                  // We need to check all keys in case some are required but missing from
                  // props.
                  var allKeys = assign({}, props[propName], shapeTypes);
                  for (var key in allKeys) {
                    var checker = shapeTypes[key];
                    if (!checker) {
                      return new PropTypeError(
                        'Invalid ' +
                          location +
                          ' `' +
                          propFullName +
                          '` key `' +
                          key +
                          '` supplied to `' +
                          componentName +
                          '`.' +
                          '\nBad object: ' +
                          JSON.stringify(props[propName], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(shapeTypes), null, '  '),
                      );
                    }
                    var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error) {
                      return error;
                    }
                  }
                  return null;
                }

                return createChainableTypeChecker(validate);
              }

              function isNode(propValue) {
                switch (typeof propValue) {
                  case 'number':
                  case 'string':
                  case 'undefined':
                    return true;
                  case 'boolean':
                    return !propValue;
                  case 'object':
                    if (Array.isArray(propValue)) {
                      return propValue.every(isNode);
                    }
                    if (propValue === null || isValidElement(propValue)) {
                      return true;
                    }

                    var iteratorFn = getIteratorFn(propValue);
                    if (iteratorFn) {
                      var iterator = iteratorFn.call(propValue);
                      var step;
                      if (iteratorFn !== propValue.entries) {
                        while (!(step = iterator.next()).done) {
                          if (!isNode(step.value)) {
                            return false;
                          }
                        }
                      } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while (!(step = iterator.next()).done) {
                          var entry = step.value;
                          if (entry) {
                            if (!isNode(entry[1])) {
                              return false;
                            }
                          }
                        }
                      }
                    } else {
                      return false;
                    }

                    return true;
                  default:
                    return false;
                }
              }

              function isSymbol(propType, propValue) {
                // Native Symbol.
                if (propType === 'symbol') {
                  return true;
                }

                // falsy value can't be a Symbol
                if (!propValue) {
                  return false;
                }

                // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                if (propValue['@@toStringTag'] === 'Symbol') {
                  return true;
                }

                // Fallback for non-spec compliant Symbols which are polyfilled.
                if (typeof Symbol === 'function' && propValue instanceof Symbol) {
                  return true;
                }

                return false;
              }

              // Equivalent of `typeof` but with special handling for array and regexp.
              function getPropType(propValue) {
                var propType = typeof propValue;
                if (Array.isArray(propValue)) {
                  return 'array';
                }
                if (propValue instanceof RegExp) {
                  // Old webkits (at least until Android 4.0) return 'function' rather than
                  // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                  // passes PropTypes.object.
                  return 'object';
                }
                if (isSymbol(propType, propValue)) {
                  return 'symbol';
                }
                return propType;
              }

              // This handles more types than `getPropType`. Only used for error messages.
              // See `createPrimitiveTypeChecker`.
              function getPreciseType(propValue) {
                if (typeof propValue === 'undefined' || propValue === null) {
                  return '' + propValue;
                }
                var propType = getPropType(propValue);
                if (propType === 'object') {
                  if (propValue instanceof Date) {
                    return 'date';
                  } else if (propValue instanceof RegExp) {
                    return 'regexp';
                  }
                }
                return propType;
              }

              // Returns a string that is postfixed to a warning about an invalid type.
              // For example, "undefined" or "of type array"
              function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case 'array':
                  case 'object':
                    return 'an ' + type;
                  case 'boolean':
                  case 'date':
                  case 'regexp':
                    return 'a ' + type;
                  default:
                    return type;
                }
              }

              // Returns class name of the object, if any.
              function getClassName(propValue) {
                if (!propValue.constructor || !propValue.constructor.name) {
                  return ANONYMOUS;
                }
                return propValue.constructor.name;
              }

              ReactPropTypes.checkPropTypes = checkPropTypes;
              ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
              ReactPropTypes.PropTypes = ReactPropTypes;

              return ReactPropTypes;
            };

            /***/
          },

        /***/ './node_modules/prop-types/index.js':
          /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            if (true) {
              var ReactIs = __webpack_require__(/*! react-is */ './node_modules/prop-types/node_modules/react-is/index.js');

              // By explicitly using `prop-types` you are opting into new development behavior.
              // http://fb.me/prop-types-in-prod
              var throwOnDirectAccess = true;
              module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ './node_modules/prop-types/factoryWithTypeCheckers.js')(ReactIs.isElement, throwOnDirectAccess);
            } else {
            }

            /***/
          },

        /***/ './node_modules/prop-types/lib/ReactPropTypesSecret.js':
          /*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
          /***/ module => {
            'use strict';
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

            module.exports = ReactPropTypesSecret;

            /***/
          },

        /***/ './node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js':
          /*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict';
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            if (true) {
              (function () {
                'use strict';

                // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
                // nor polyfill, then a plain number is used for performance.
                var hasSymbol = typeof Symbol === 'function' && Symbol.for;
                var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
                var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
                var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
                var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
                var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
                var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
                var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
                // (unstable) APIs that have been removed. Can we remove the symbols?

                var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
                var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
                var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
                var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
                var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
                var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
                var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
                var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
                var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
                var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
                var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

                function isValidElementType(type) {
                  return (
                    typeof type === 'string' ||
                    typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                    type === REACT_FRAGMENT_TYPE ||
                    type === REACT_CONCURRENT_MODE_TYPE ||
                    type === REACT_PROFILER_TYPE ||
                    type === REACT_STRICT_MODE_TYPE ||
                    type === REACT_SUSPENSE_TYPE ||
                    type === REACT_SUSPENSE_LIST_TYPE ||
                    (typeof type === 'object' &&
                      type !== null &&
                      (type.$$typeof === REACT_LAZY_TYPE ||
                        type.$$typeof === REACT_MEMO_TYPE ||
                        type.$$typeof === REACT_PROVIDER_TYPE ||
                        type.$$typeof === REACT_CONTEXT_TYPE ||
                        type.$$typeof === REACT_FORWARD_REF_TYPE ||
                        type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                        type.$$typeof === REACT_RESPONDER_TYPE ||
                        type.$$typeof === REACT_SCOPE_TYPE ||
                        type.$$typeof === REACT_BLOCK_TYPE))
                  );
                }

                function typeOf(object) {
                  if (typeof object === 'object' && object !== null) {
                    var $$typeof = object.$$typeof;

                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;

                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;

                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_LAZY_TYPE:
                              case REACT_MEMO_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                  }

                  return undefined;
                } // AsyncMode is deprecated along with isAsyncMode

                var AsyncMode = REACT_ASYNC_MODE_TYPE;
                var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
                var ContextConsumer = REACT_CONTEXT_TYPE;
                var ContextProvider = REACT_PROVIDER_TYPE;
                var Element = REACT_ELEMENT_TYPE;
                var ForwardRef = REACT_FORWARD_REF_TYPE;
                var Fragment = REACT_FRAGMENT_TYPE;
                var Lazy = REACT_LAZY_TYPE;
                var Memo = REACT_MEMO_TYPE;
                var Portal = REACT_PORTAL_TYPE;
                var Profiler = REACT_PROFILER_TYPE;
                var StrictMode = REACT_STRICT_MODE_TYPE;
                var Suspense = REACT_SUSPENSE_TYPE;
                var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

                function isAsyncMode(object) {
                  {
                    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                      console['warn'](
                        'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                          'and will be removed in React 17+. Update your code to use ' +
                          'ReactIs.isConcurrentMode() instead. It has the exact same API.',
                      );
                    }
                  }

                  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
                }
                function isConcurrentMode(object) {
                  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
                }
                function isContextConsumer(object) {
                  return typeOf(object) === REACT_CONTEXT_TYPE;
                }
                function isContextProvider(object) {
                  return typeOf(object) === REACT_PROVIDER_TYPE;
                }
                function isElement(object) {
                  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function isForwardRef(object) {
                  return typeOf(object) === REACT_FORWARD_REF_TYPE;
                }
                function isFragment(object) {
                  return typeOf(object) === REACT_FRAGMENT_TYPE;
                }
                function isLazy(object) {
                  return typeOf(object) === REACT_LAZY_TYPE;
                }
                function isMemo(object) {
                  return typeOf(object) === REACT_MEMO_TYPE;
                }
                function isPortal(object) {
                  return typeOf(object) === REACT_PORTAL_TYPE;
                }
                function isProfiler(object) {
                  return typeOf(object) === REACT_PROFILER_TYPE;
                }
                function isStrictMode(object) {
                  return typeOf(object) === REACT_STRICT_MODE_TYPE;
                }
                function isSuspense(object) {
                  return typeOf(object) === REACT_SUSPENSE_TYPE;
                }

                exports.AsyncMode = AsyncMode;
                exports.ConcurrentMode = ConcurrentMode;
                exports.ContextConsumer = ContextConsumer;
                exports.ContextProvider = ContextProvider;
                exports.Element = Element;
                exports.ForwardRef = ForwardRef;
                exports.Fragment = Fragment;
                exports.Lazy = Lazy;
                exports.Memo = Memo;
                exports.Portal = Portal;
                exports.Profiler = Profiler;
                exports.StrictMode = StrictMode;
                exports.Suspense = Suspense;
                exports.isAsyncMode = isAsyncMode;
                exports.isConcurrentMode = isConcurrentMode;
                exports.isContextConsumer = isContextConsumer;
                exports.isContextProvider = isContextProvider;
                exports.isElement = isElement;
                exports.isForwardRef = isForwardRef;
                exports.isFragment = isFragment;
                exports.isLazy = isLazy;
                exports.isMemo = isMemo;
                exports.isPortal = isPortal;
                exports.isProfiler = isProfiler;
                exports.isStrictMode = isStrictMode;
                exports.isSuspense = isSuspense;
                exports.isValidElementType = isValidElementType;
                exports.typeOf = typeOf;
              })();
            }

            /***/
          },

        /***/ './node_modules/prop-types/node_modules/react-is/index.js':
          /*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict';

            if (false) {
            } else {
              module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ './node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js');
            }

            /***/
          },

        /***/ '../template-annotations/build/mgnl-service.js':
          /*!*****************************************************!*\
  !*** ../template-annotations/build/mgnl-service.js ***!
  \*****************************************************/
          /***/ function (module) {
            (function webpackUniversalModuleDefinition(root, factory) {
              if (true) module.exports = factory();
              else {
                var i, a;
              }
            })(this, function () {
              return /******/ (function (modules) {
                // webpackBootstrap
                /******/ // The module cache
                /******/ var installedModules = {};
                /******/
                /******/ // The require function
                /******/ function __nested_webpack_require_536__(moduleId) {
                  /******/
                  /******/ // Check if module is in cache
                  /******/ if (installedModules[moduleId]) {
                    /******/ return installedModules[moduleId].exports;
                    /******/
                  }
                  /******/ // Create a new module (and put it into the cache)
                  /******/ var module = (installedModules[moduleId] = {
                    /******/ i: moduleId,
                    /******/ l: false,
                    /******/ exports: {},
                    /******/
                  });
                  /******/
                  /******/ // Execute the module function
                  /******/ modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_536__);
                  /******/
                  /******/ // Flag the module as loaded
                  /******/ module.l = true;
                  /******/
                  /******/ // Return the exports of the module
                  /******/ return module.exports;
                  /******/
                }
                /******/
                /******/
                /******/ // expose the modules object (__webpack_modules__)
                /******/ __nested_webpack_require_536__.m = modules;
                /******/
                /******/ // expose the module cache
                /******/ __nested_webpack_require_536__.c = installedModules;
                /******/
                /******/ // define getter function for harmony exports
                /******/ __nested_webpack_require_536__.d = function (exports, name, getter) {
                  /******/ if (!__nested_webpack_require_536__.o(exports, name)) {
                    /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                  }
                  /******/
                };
                /******/
                /******/ // define __esModule on exports
                /******/ __nested_webpack_require_536__.r = function (exports) {
                  /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                  }
                  /******/ Object.defineProperty(exports, '__esModule', { value: true });
                  /******/
                };
                /******/
                /******/ // create a fake namespace object
                /******/ // mode & 1: value is a module id, require it
                /******/ // mode & 2: merge all properties of value into the ns
                /******/ // mode & 4: return value when already ns object
                /******/ // mode & 8|1: behave like require
                /******/ __nested_webpack_require_536__.t = function (value, mode) {
                  /******/ if (mode & 1) value = __nested_webpack_require_536__(value);
                  /******/ if (mode & 8) return value;
                  /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
                  /******/ var ns = Object.create(null);
                  /******/ __nested_webpack_require_536__.r(ns);
                  /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                  /******/ if (mode & 2 && typeof value != 'string')
                    for (var key in value)
                      __nested_webpack_require_536__.d(
                        ns,
                        key,
                        function (key) {
                          return value[key];
                        }.bind(null, key),
                      );
                  /******/ return ns;
                  /******/
                };
                /******/
                /******/ // getDefaultExport function for compatibility with non-harmony modules
                /******/ __nested_webpack_require_536__.n = function (module) {
                  /******/ var getter =
                    module && module.__esModule
                      ? /******/ function getDefault() {
                          return module['default'];
                        }
                      : /******/ function getModuleExports() {
                          return module;
                        };
                  /******/ __nested_webpack_require_536__.d(getter, 'a', getter);
                  /******/ return getter;
                  /******/
                };
                /******/
                /******/ // Object.prototype.hasOwnProperty.call
                /******/ __nested_webpack_require_536__.o = function (object, property) {
                  return Object.prototype.hasOwnProperty.call(object, property);
                };
                /******/
                /******/ // __webpack_public_path__
                /******/ __nested_webpack_require_536__.p = '';
                /******/
                /******/
                /******/ // Load entry module and return exports
                /******/ return __nested_webpack_require_536__((__nested_webpack_require_536__.s = 0));
                /******/
              })(
                /************************************************************************/
                /******/ {
                  /***/ './node_modules/@ungap/url-search-params/esm/index.js':
                    /*!************************************************************!*\
  !*** ./node_modules/@ungap/url-search-params/esm/index.js ***!
  \************************************************************/
                    /*! exports provided: default */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_4297__) {
                      'use strict';
                      __nested_webpack_require_4297__.r(__webpack_exports__);
                      /*! (c) Andrea Giammarchi - ISC */
                      var self = {};
                      try {
                        (function (URLSearchParams, plus) {
                          if (
                            new URLSearchParams('q=%2B').get('q') !== plus ||
                            new URLSearchParams({ q: plus }).get('q') !== plus ||
                            new URLSearchParams([['q', plus]]).get('q') !== plus ||
                            new URLSearchParams('q=\n').toString() !== 'q=%0A' ||
                            new URLSearchParams({ q: ' &' }).toString() !== 'q=+%26' ||
                            new URLSearchParams({ q: '%zx' }).toString() !== 'q=%25zx'
                          )
                            throw URLSearchParams;
                          self.URLSearchParams = URLSearchParams;
                        })(URLSearchParams, '+');
                      } catch (URLSearchParams) {
                        (function (Object, String, isArray) {
                          'use strict';
                          var create = Object.create;
                          var defineProperty = Object.defineProperty;
                          var find = /[!'\(\)~]|%20|%00/g;
                          var findPercentSign = /%(?![0-9a-fA-F]{2})/g;
                          var plus = /\+/g;
                          var replace = {
                            '!': '%21',
                            "'": '%27',
                            '(': '%28',
                            ')': '%29',
                            '~': '%7E',
                            '%20': '+',
                            '%00': '\x00',
                          };
                          var proto = {
                            append: function (key, value) {
                              appendTo(this._ungap, key, value);
                            },
                            delete: function (key) {
                              delete this._ungap[key];
                            },
                            get: function (key) {
                              return this.has(key) ? this._ungap[key][0] : null;
                            },
                            getAll: function (key) {
                              return this.has(key) ? this._ungap[key].slice(0) : [];
                            },
                            has: function (key) {
                              return key in this._ungap;
                            },
                            set: function (key, value) {
                              this._ungap[key] = [String(value)];
                            },
                            forEach: function (callback, thisArg) {
                              var self = this;
                              for (var key in self._ungap) self._ungap[key].forEach(invoke, key);
                              function invoke(value) {
                                callback.call(thisArg, value, String(key), self);
                              }
                            },
                            toJSON: function () {
                              return {};
                            },
                            toString: function () {
                              var query = [];
                              for (var key in this._ungap) {
                                var encoded = encode(key);
                                for (var i = 0, value = this._ungap[key]; i < value.length; i++) {
                                  query.push(encoded + '=' + encode(value[i]));
                                }
                              }
                              return query.join('&');
                            },
                          };
                          for (var key in proto)
                            defineProperty(URLSearchParams.prototype, key, {
                              configurable: true,
                              writable: true,
                              value: proto[key],
                            });
                          self.URLSearchParams = URLSearchParams;
                          function URLSearchParams(query) {
                            var dict = create(null);
                            defineProperty(this, '_ungap', { value: dict });
                            switch (true) {
                              case !query:
                                break;
                              case typeof query === 'string':
                                if (query.charAt(0) === '?') {
                                  query = query.slice(1);
                                }
                                for (var pairs = query.split('&'), i = 0, length = pairs.length; i < length; i++) {
                                  var value = pairs[i];
                                  var index = value.indexOf('=');
                                  if (-1 < index) {
                                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                                  } else if (value.length) {
                                    appendTo(dict, decode(value), '');
                                  }
                                }
                                break;
                              case isArray(query):
                                for (var i = 0, length = query.length; i < length; i++) {
                                  var value = query[i];
                                  appendTo(dict, value[0], value[1]);
                                }
                                break;
                              case 'forEach' in query:
                                query.forEach(addEach, dict);
                                break;
                              default:
                                for (var key in query) appendTo(dict, key, query[key]);
                            }
                          }

                          function addEach(value, key) {
                            appendTo(this, key, value);
                          }

                          function appendTo(dict, key, value) {
                            var res = isArray(value) ? value.join(',') : value;
                            if (key in dict) dict[key].push(res);
                            else dict[key] = [res];
                          }

                          function decode(str) {
                            return decodeURIComponent(str.replace(findPercentSign, '%25').replace(plus, ' '));
                          }

                          function encode(str) {
                            return encodeURIComponent(str).replace(find, replacer);
                          }

                          function replacer(match) {
                            return replace[match];
                          }
                        })(Object, String, Array.isArray);
                      }

                      (function (URLSearchParamsProto) {
                        var iterable = false;
                        try {
                          iterable = !!Symbol.iterator;
                        } catch (o_O) {}

                        /* istanbul ignore else */
                        if (!('forEach' in URLSearchParamsProto)) {
                          URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
                            var self = this;
                            var names = Object.create(null);
                            this.toString()
                              .replace(/=[\s\S]*?(?:&|$)/g, '=')
                              .split('=')
                              .forEach(function (name) {
                                if (!name.length || name in names) return;
                                (names[name] = self.getAll(name)).forEach(function (value) {
                                  callback.call(thisArg, value, name, self);
                                });
                              });
                          };
                        }

                        /* istanbul ignore else */
                        if (!('keys' in URLSearchParamsProto)) {
                          URLSearchParamsProto.keys = function keys() {
                            return iterator(this, function (value, key) {
                              this.push(key);
                            });
                          };
                        }

                        /* istanbul ignore else */
                        if (!('values' in URLSearchParamsProto)) {
                          URLSearchParamsProto.values = function values() {
                            return iterator(this, function (value, key) {
                              this.push(value);
                            });
                          };
                        }

                        /* istanbul ignore else */
                        if (!('entries' in URLSearchParamsProto)) {
                          URLSearchParamsProto.entries = function entries() {
                            return iterator(this, function (value, key) {
                              this.push([key, value]);
                            });
                          };
                        }

                        /* istanbul ignore else */
                        if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
                          URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
                        }

                        /* istanbul ignore else */
                        if (!('sort' in URLSearchParamsProto)) {
                          URLSearchParamsProto.sort = function sort() {
                            var entries = this.entries(),
                              entry = entries.next(),
                              done = entry.done,
                              keys = [],
                              values = Object.create(null),
                              i,
                              key,
                              value;
                            while (!done) {
                              value = entry.value;
                              key = value[0];
                              keys.push(key);
                              if (!(key in values)) {
                                values[key] = [];
                              }
                              values[key].push(value[1]);
                              entry = entries.next();
                              done = entry.done;
                            }
                            // not the champion in efficiency
                            // but these two bits just do the job
                            keys.sort();
                            for (i = 0; i < keys.length; i++) {
                              this.delete(keys[i]);
                            }
                            for (i = 0; i < keys.length; i++) {
                              key = keys[i];
                              this.append(key, values[key].shift());
                            }
                          };
                        }

                        function iterator(self, callback) {
                          var items = [];
                          self.forEach(callback, items);
                          /* istanbul ignore next */
                          return iterable
                            ? items[Symbol.iterator]()
                            : {
                                next: function () {
                                  var value = items.shift();
                                  return { done: value === void 0, value: value };
                                },
                              };
                        }

                        /* istanbul ignore next */
                        (function (Object) {
                          var dP = Object.defineProperty,
                            gOPD = Object.getOwnPropertyDescriptor,
                            createSearchParamsPollute = function (search) {
                              function append(name, value) {
                                URLSearchParamsProto.append.call(this, name, value);
                                name = this.toString();
                                search.set.call(this._usp, name ? '?' + name : '');
                              }
                              function del(name) {
                                URLSearchParamsProto.delete.call(this, name);
                                name = this.toString();
                                search.set.call(this._usp, name ? '?' + name : '');
                              }
                              function set(name, value) {
                                URLSearchParamsProto.set.call(this, name, value);
                                name = this.toString();
                                search.set.call(this._usp, name ? '?' + name : '');
                              }
                              return function (sp, value) {
                                sp.append = append;
                                sp.delete = del;
                                sp.set = set;
                                return dP(sp, '_usp', {
                                  configurable: true,
                                  writable: true,
                                  value: value,
                                });
                              };
                            },
                            createSearchParamsCreate = function (polluteSearchParams) {
                              return function (obj, sp) {
                                dP(obj, '_searchParams', {
                                  configurable: true,
                                  writable: true,
                                  value: polluteSearchParams(sp, obj),
                                });
                                return sp;
                              };
                            },
                            updateSearchParams = function (sp) {
                              var append = sp.append;
                              sp.append = URLSearchParamsProto.append;
                              URLSearchParams.call(sp, sp._usp.search.slice(1));
                              sp.append = append;
                            },
                            verifySearchParams = function (obj, Class) {
                              if (!(obj instanceof Class)) throw new TypeError("'searchParams' accessed on an object that " + 'does not implement interface ' + Class.name);
                            },
                            upgradeClass = function (Class) {
                              var ClassProto = Class.prototype,
                                searchParams = gOPD(ClassProto, 'searchParams'),
                                href = gOPD(ClassProto, 'href'),
                                search = gOPD(ClassProto, 'search'),
                                createSearchParams;
                              if (!searchParams && search && search.set) {
                                createSearchParams = createSearchParamsCreate(createSearchParamsPollute(search));
                                Object.defineProperties(ClassProto, {
                                  href: {
                                    get: function () {
                                      return href.get.call(this);
                                    },
                                    set: function (value) {
                                      var sp = this._searchParams;
                                      href.set.call(this, value);
                                      if (sp) updateSearchParams(sp);
                                    },
                                  },
                                  search: {
                                    get: function () {
                                      return search.get.call(this);
                                    },
                                    set: function (value) {
                                      var sp = this._searchParams;
                                      search.set.call(this, value);
                                      if (sp) updateSearchParams(sp);
                                    },
                                  },
                                  searchParams: {
                                    get: function () {
                                      verifySearchParams(this, Class);
                                      return this._searchParams || createSearchParams(this, new URLSearchParams(this.search.slice(1)));
                                    },
                                    set: function (sp) {
                                      verifySearchParams(this, Class);
                                      createSearchParams(this, sp);
                                    },
                                  },
                                });
                              }
                            };
                          try {
                            upgradeClass(HTMLAnchorElement);
                            if (/^function|object$/.test(typeof URL) && URL.prototype) upgradeClass(URL);
                          } catch (meh) {}
                        })(Object);
                      })(self.URLSearchParams.prototype, Object);
                      /* harmony default export */ __webpack_exports__['default'] = self.URLSearchParams;

                      /***/
                    },

                  /***/ './src/index.js':
                    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
                    /*! exports provided: TemplateAnnotations, EditorContextHelper, LoggerService, PersonalizationService */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_15711__) {
                      'use strict';
                      __nested_webpack_require_15711__.r(__webpack_exports__);
                      /* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15711__(/*! ./service */ './src/service/index.js');
                      /* harmony reexport (safe) */ __nested_webpack_require_15711__.d(__webpack_exports__, 'TemplateAnnotations', function () {
                        return _service__WEBPACK_IMPORTED_MODULE_0__['TemplateAnnotations'];
                      });

                      /* harmony reexport (safe) */ __nested_webpack_require_15711__.d(__webpack_exports__, 'EditorContextHelper', function () {
                        return _service__WEBPACK_IMPORTED_MODULE_0__['EditorContextHelper'];
                      });

                      /* harmony reexport (safe) */ __nested_webpack_require_15711__.d(__webpack_exports__, 'LoggerService', function () {
                        return _service__WEBPACK_IMPORTED_MODULE_0__['LoggerService'];
                      });

                      /* harmony reexport (safe) */ __nested_webpack_require_15711__.d(__webpack_exports__, 'PersonalizationService', function () {
                        return _service__WEBPACK_IMPORTED_MODULE_0__['PersonalizationService'];
                      });

                      /***/
                    },

                  /***/ './src/service/EditorContextHelper.js':
                    /*!********************************************!*\
  !*** ./src/service/EditorContextHelper.js ***!
  \********************************************/
                    /*! exports provided: inIframe, inEditor, inEditorPreview, refresh, onFrameReady, default */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_16994__) {
                      'use strict';
                      __nested_webpack_require_16994__.r(__webpack_exports__);
                      /* harmony export (binding) */ __nested_webpack_require_16994__.d(__webpack_exports__, 'inIframe', function () {
                        return inIframe;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_16994__.d(__webpack_exports__, 'inEditor', function () {
                        return inEditor;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_16994__.d(__webpack_exports__, 'inEditorPreview', function () {
                        return inEditorPreview;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_16994__.d(__webpack_exports__, 'refresh', function () {
                        return refresh;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_16994__.d(__webpack_exports__, 'onFrameReady', function () {
                        return onFrameReady;
                      });
                      var inIframe = function inIframe() {
                        if (typeof window === 'undefined') {
                          return false;
                        }

                        return Boolean(window.location !== window.parent.location);
                      };
                      var inEditor = function inEditor() {
                        return inIframe() && !window.location.search.includes('mgnlPreview=true') && !window.location.search.includes('mgnlPreviewAsVisitor=true');
                      };
                      var inEditorPreview = function inEditorPreview() {
                        return inIframe() && (window.location.search.includes('mgnlPreview=true') || window.location.search.includes('mgnlPreviewAsVisitor=true'));
                      };
                      var refresh = function refresh() {
                        if (inEditor() && document.documentElement.innerHTML.indexOf('<!--cms:page') > -1) {
                          if (window.mgnlRefresh) {
                            window.mgnlRefresh();
                          } else if (window.parent.mgnlRefresh) {
                            window.parent.mgnlRefresh();
                          } else {
                            setTimeout(refresh, 200);
                          }
                        }
                      };
                      var onFrameReady = function onFrameReady() {
                        if (inIframe()) {
                          if (window.mgnlFrameReady) {
                            window.mgnlFrameReady();
                          } else if (window.parent.mgnlFrameReady) {
                            window.parent.mgnlFrameReady();
                          }
                        }
                      };
                      /* harmony default export */ __webpack_exports__['default'] = {
                        inIframe: inIframe,
                        inEditor: inEditor,
                        refresh: refresh,
                        inEditorPreview: inEditorPreview,
                        onFrameReady: onFrameReady,
                      };

                      /***/
                    },

                  /***/ './src/service/LoggerService.js':
                    /*!**************************************!*\
  !*** ./src/service/LoggerService.js ***!
  \**************************************/
                    /*! exports provided: log, info, warn, error, default */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_19265__) {
                      'use strict';
                      __nested_webpack_require_19265__.r(__webpack_exports__);
                      /* harmony export (binding) */ __nested_webpack_require_19265__.d(__webpack_exports__, 'log', function () {
                        return log;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_19265__.d(__webpack_exports__, 'info', function () {
                        return info;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_19265__.d(__webpack_exports__, 'warn', function () {
                        return warn;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_19265__.d(__webpack_exports__, 'error', function () {
                        return error;
                      });
                      function exec() {
                        var fnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';
                        var message = arguments.length > 1 ? arguments[1] : undefined;

                        if (typeof console === 'undefined') {
                          return;
                        } // eslint-disable-next-line no-console

                        for (var _len = arguments.length, optionalParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                          optionalParams[_key - 2] = arguments[_key];
                        }

                        console[fnName](message, optionalParams);
                      }

                      var log = function log(message) {
                        for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                          optionalParams[_key2 - 1] = arguments[_key2];
                        }

                        exec('log', message, optionalParams);
                      };
                      var info = function info(message) {
                        for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                          optionalParams[_key3 - 1] = arguments[_key3];
                        }

                        exec('info', message, optionalParams);
                      };
                      var warn = function warn(message) {
                        for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                          optionalParams[_key4 - 1] = arguments[_key4];
                        }

                        exec('warn', message, optionalParams);
                      };
                      var error = function error(message) {
                        for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                          optionalParams[_key5 - 1] = arguments[_key5];
                        }

                        exec('error', message, optionalParams);
                      };
                      /* harmony default export */ __webpack_exports__['default'] = {
                        log: log,
                        info: info,
                        warn: warn,
                        error: error,
                      };

                      /***/
                    },

                  /***/ './src/service/PersonalizationService.js':
                    /*!***********************************************!*\
  !*** ./src/service/PersonalizationService.js ***!
  \***********************************************/
                    /*! exports provided: getSelectedVariant, isPreviewAsVisitor, getPersonalizationParams, toSearchQuery, getVariant, default */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_21858__) {
                      'use strict';
                      __nested_webpack_require_21858__.r(__webpack_exports__);
                      /* harmony export (binding) */ __nested_webpack_require_21858__.d(__webpack_exports__, 'getSelectedVariant', function () {
                        return getSelectedVariant;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_21858__.d(__webpack_exports__, 'isPreviewAsVisitor', function () {
                        return isPreviewAsVisitor;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_21858__.d(__webpack_exports__, 'getPersonalizationParams', function () {
                        return getPersonalizationParams;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_21858__.d(__webpack_exports__, 'toSearchQuery', function () {
                        return toSearchQuery;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_21858__.d(__webpack_exports__, 'getVariant', function () {
                        return getVariant;
                      });
                      /* harmony import */ var _EditorContextHelper__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21858__(
                        /*! ./EditorContextHelper */ './src/service/EditorContextHelper.js',
                      );
                      /* harmony import */ var _ungap_url_search_params__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21858__(
                        /*! @ungap/url-search-params */ './node_modules/@ungap/url-search-params/esm/index.js',
                      );

                      function encodeValue(val) {
                        if (typeof encodeURIComponent === 'undefined') {
                          return val;
                        }

                        return encodeURIComponent(val);
                      }

                      function decodeValue(val) {
                        if (typeof decodeURIComponent === 'undefined') {
                          return val;
                        }

                        return decodeURIComponent(val);
                      }

                      var getSelectedVariant = function getSelectedVariant(content, templateAnnotations) {
                        if (!content || !templateAnnotations) {
                          return content;
                        }

                        var annotations = templateAnnotations[content['@path']];
                        var match = annotations.match(/selectedVariant="(.+)"/);
                        var variant = match[1];
                        return variant === content['@name'] ? content : content[variant];
                      };
                      var isPreviewAsVisitor = function isPreviewAsVisitor(searchQuery) {
                        var searchParams = new _ungap_url_search_params__WEBPACK_IMPORTED_MODULE_1__['default'](searchQuery);
                        return searchParams.get('mgnlPreviewAsVisitor');
                      };
                      var getPersonalizationParams = function getPersonalizationParams(searchQuery) {
                        var params = {};

                        if (!_EditorContextHelper__WEBPACK_IMPORTED_MODULE_0__['default'].inIframe()) {
                          // Not in Page Editor
                          return params;
                        }

                        var searchParams = new _ungap_url_search_params__WEBPACK_IMPORTED_MODULE_1__['default'](searchQuery);
                        var iter = searchParams.entries();
                        var result = iter.next();

                        while (!result.done) {
                          var key = result.value[0];
                          var value = result.value[1];

                          if (key.startsWith('preview')) {
                            params[key] = decodeValue(value);
                          }

                          result = iter.next();
                        }

                        if (isPreviewAsVisitor(searchQuery)) {
                          params.mgnlPreviewAsVisitor = 'true';
                        } else {
                          params.variants = 'all';
                        }

                        return params;
                      };
                      var toSearchQuery = function toSearchQuery(params) {
                        var queryString = Object.keys(params)
                          .map(function (key) {
                            return ''.concat(key, '=').concat(encodeValue(params[key]));
                          })
                          .join('&');
                        return queryString ? '?'.concat(queryString) : '';
                      };
                      var getVariant = function getVariant(content, templateAnnotations) {
                        if (!_EditorContextHelper__WEBPACK_IMPORTED_MODULE_0__['default'].inEditor()) {
                          return content;
                        }

                        if (content && content['jcr:mixinTypes'] && content['jcr:mixinTypes'].includes('mgnl:hasVariant')) {
                          return getSelectedVariant(content, templateAnnotations);
                        }

                        return content;
                      };
                      /* harmony default export */ __webpack_exports__['default'] = {
                        isPreviewAsVisitor: isPreviewAsVisitor,
                        getPersonalizationParams: getPersonalizationParams,
                        toSearchQuery: toSearchQuery,
                        getVariant: getVariant,
                      };

                      /***/
                    },

                  /***/ './src/service/TemplateAnnotations.js':
                    /*!********************************************!*\
  !*** ./src/service/TemplateAnnotations.js ***!
  \********************************************/
                    /*! exports provided: getPageCommentString, getAreaCommentString, getComponentCommentString, default */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_25803__) {
                      'use strict';
                      __nested_webpack_require_25803__.r(__webpack_exports__);
                      /* harmony export (binding) */ __nested_webpack_require_25803__.d(__webpack_exports__, 'getPageCommentString', function () {
                        return getPageCommentString;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_25803__.d(__webpack_exports__, 'getAreaCommentString', function () {
                        return getAreaCommentString;
                      });
                      /* harmony export (binding) */ __nested_webpack_require_25803__.d(__webpack_exports__, 'getComponentCommentString', function () {
                        return getComponentCommentString;
                      });
                      function _typeof(obj) {
                        '@babel/helpers - typeof';
                        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
                          _typeof = function _typeof(obj) {
                            return typeof obj;
                          };
                        } else {
                          _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
                          };
                        }
                        return _typeof(obj);
                      }

                      function _slicedToArray(arr, i) {
                        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
                      }

                      function _nonIterableRest() {
                        throw new TypeError(
                          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                      }

                      function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        if (n === 'Object' && o.constructor) n = o.constructor.name;
                        if (n === 'Map' || n === 'Set') return Array.from(o);
                        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                      }

                      function _arrayLikeToArray(arr, len) {
                        if (len == null || len > arr.length) len = arr.length;
                        for (var i = 0, arr2 = new Array(len); i < len; i++) {
                          arr2[i] = arr[i];
                        }
                        return arr2;
                      }

                      function _iterableToArrayLimit(arr, i) {
                        var _i = arr == null ? null : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
                        if (_i == null) return;
                        var _arr = [];
                        var _n = true;
                        var _d = false;
                        var _s, _e;
                        try {
                          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                          }
                        } catch (err) {
                          _d = true;
                          _e = err;
                        } finally {
                          try {
                            if (!_n && _i['return'] != null) _i['return']();
                          } finally {
                            if (_d) throw _e;
                          }
                        }
                        return _arr;
                      }

                      function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                      }

                      var ACTIVATION_STATUS_NOT_ACTIVATED = 0;
                      var ACTIVATION_STATUS_MODIFIED = 1;
                      var ACTIVATION_STATUS_ACTIVATED = 2;
                      var VALUE_PROCESSORS = {
                        content: getContentPath,
                        availableComponents: getAvailableComponents,
                        showAddButton: canAddMoreComponents,
                        activationStatus: getActivationStatus,
                      };
                      var PAGE_MAP = {
                        content: ['@path', ''],
                        dialog: ['dialog', '', getValueFromObject],
                      };
                      var AREA_MAP = {
                        name: ['@name', ''],
                        content: PAGE_MAP.content,
                        dialog: PAGE_MAP.dialog,
                        availableComponents: ['availableComponents', []],
                        type: ['type', 'list', getValueFromObject],
                        label: ['title', '', getValueFromObject],
                        inherit: ['inheritance', false, getValueFromObject],
                        optional: ['optional', false, getValueFromObject],
                        createdAreaNode: ['createAreaNode', true, getValueFromObject],
                        showAddButton: ['maxComponents', true],
                        showNewComponentArea: [null, true],
                        description: ['description', '', getValueFromObject],
                        activationStatus: [null, 0],
                      };
                      var COMPONENT_MAP = {
                        content: PAGE_MAP.content,
                        dialog: PAGE_MAP.dialog,
                        label: ['title', '', getValueFromObject],
                        description: ['description', '', getValueFromObject],
                        activationStatus: [null, 0],
                      };

                      function getCommentString(data, map, templateDefinition, customParams) {
                        var result = [];
                        Object.keys(map).forEach(function (key) {
                          var _map$key = _slicedToArray(map[key], 3),
                            dataKey = _map$key[0],
                            defaultValue = _map$key[1],
                            getDataFn = _map$key[2];

                          var contentProcessor = VALUE_PROCESSORS[key];
                          var value = defaultValue;

                          if (contentProcessor) {
                            value = contentProcessor(data, dataKey, templateDefinition, customParams);
                          } else if (getDataFn) {
                            value = getDataFn(templateDefinition, dataKey, defaultValue);
                          } else if (data != null && dataKey !== null) {
                            value = data[dataKey] || '';
                          }

                          var item = {
                            key: key,
                            value: value,
                          };

                          if (typeof item.value !== 'string' || item.value) {
                            result.push(''.concat(key, '="').concat(item.value, '"'));
                          }
                        });
                        return result.join(' ');
                      }

                      function getAvailableComponents(area, dataKey, templateDefinition) {
                        if (!templateDefinition || !templateDefinition[dataKey]) {
                          return '';
                        }

                        return Object.keys(templateDefinition[dataKey])
                          .map(function (key) {
                            return templateDefinition[dataKey][key].id;
                          })
                          .join(',');
                      }

                      function canAddMoreComponents(area, dataKey, templateDefinition, customParams) {
                        if (!templateDefinition || templateDefinition.maxComponents == null || !customParams || customParams.componentCount == null) {
                          return true;
                        }

                        return customParams.componentCount < templateDefinition.maxComponents;
                      }

                      function getValueFromObject(obj, key, defaultValue) {
                        var value = obj && _typeof(obj) === 'object' && key ? obj[key] : null;
                        value = value == null ? defaultValue : value;
                        value = typeof defaultValue === 'boolean' ? Boolean(value) : value;
                        return value != null ? value : defaultValue;
                      }

                      function getContentPath(data, key) {
                        var value = data ? data[key] : null; // NOTE: Empty string is acceptable. So we need check value != null

                        return value != null ? 'website:'.concat(value) : '';
                      }

                      function getActivationStatus(data) {
                        if (!data || !data['mgnl:activationStatus'] || data['mgnl:activationStatus'] === 'false') {
                          return ACTIVATION_STATUS_NOT_ACTIVATED;
                        }

                        var lastModified = data['mgnl:lastModified'] ? new Date(data['mgnl:lastModified']) : null;
                        var lastActivated = data['mgnl:lastActivated'] ? new Date(data['mgnl:lastActivated']) : null;
                        return lastModified && lastActivated && lastModified.getTime() > lastActivated.getTime() ? ACTIVATION_STATUS_MODIFIED : ACTIVATION_STATUS_ACTIVATED;
                      }

                      var getPageCommentString = function getPageCommentString(page, templateDefinition) {
                        return 'cms:page '.concat(getCommentString(page, PAGE_MAP, templateDefinition));
                      };
                      var getAreaCommentString = function getAreaCommentString(area, templateDefinition, componentCount) {
                        var customParams = {
                          componentCount: componentCount,
                        };
                        var areaTemplateDefinition = templateDefinition && templateDefinition.areas ? templateDefinition.areas[area['@name']] : {};
                        return 'cms:area '.concat(getCommentString(area, AREA_MAP, areaTemplateDefinition, customParams));
                      };
                      var getComponentCommentString = function getComponentCommentString(component, templateDefinition) {
                        return 'cms:component '.concat(getCommentString(component, COMPONENT_MAP, templateDefinition));
                      };
                      /* harmony default export */ __webpack_exports__['default'] = {
                        getAreaCommentString: getAreaCommentString,
                        getComponentCommentString: getComponentCommentString,
                        getPageCommentString: getPageCommentString,
                      };

                      /***/
                    },

                  /***/ './src/service/index.js':
                    /*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
                    /*! exports provided: TemplateAnnotations, EditorContextHelper, LoggerService, PersonalizationService */
                    /***/ function (module, __webpack_exports__, __nested_webpack_require_33219__) {
                      'use strict';
                      __nested_webpack_require_33219__.r(__webpack_exports__);
                      /* harmony import */ var _TemplateAnnotations__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_33219__(
                        /*! ./TemplateAnnotations */ './src/service/TemplateAnnotations.js',
                      );
                      /* harmony reexport (safe) */ __nested_webpack_require_33219__.d(__webpack_exports__, 'TemplateAnnotations', function () {
                        return _TemplateAnnotations__WEBPACK_IMPORTED_MODULE_0__['default'];
                      });

                      /* harmony import */ var _EditorContextHelper__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_33219__(
                        /*! ./EditorContextHelper */ './src/service/EditorContextHelper.js',
                      );
                      /* harmony reexport (safe) */ __nested_webpack_require_33219__.d(__webpack_exports__, 'EditorContextHelper', function () {
                        return _EditorContextHelper__WEBPACK_IMPORTED_MODULE_1__['default'];
                      });

                      /* harmony import */ var _LoggerService__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_33219__(
                        /*! ./LoggerService */ './src/service/LoggerService.js',
                      );
                      /* harmony reexport (safe) */ __nested_webpack_require_33219__.d(__webpack_exports__, 'LoggerService', function () {
                        return _LoggerService__WEBPACK_IMPORTED_MODULE_2__['default'];
                      });

                      /* harmony import */ var _PersonalizationService__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_33219__(
                        /*! ./PersonalizationService */ './src/service/PersonalizationService.js',
                      );
                      /* harmony reexport (safe) */ __nested_webpack_require_33219__.d(__webpack_exports__, 'PersonalizationService', function () {
                        return _PersonalizationService__WEBPACK_IMPORTED_MODULE_3__['default'];
                      });

                      /***/
                    },

                  /***/ '0':
                    /*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
                    /*! no static exports found */
                    /***/ function (module, exports, __nested_webpack_require_34876__) {
                      module.exports = __nested_webpack_require_34876__(/*! ./src/index.js */ './src/index.js');

                      /***/
                    },

                  /******/
                },
              );
            });
            //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9Mb2dnZXJTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL1BlcnNvbmFsaXphdGlvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvVGVtcGxhdGVBbm5vdGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbklmcmFtZSIsIndpbmRvdyIsIkJvb2xlYW4iLCJsb2NhdGlvbiIsInBhcmVudCIsImluRWRpdG9yIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJpbkVkaXRvclByZXZpZXciLCJyZWZyZXNoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJpbm5lckhUTUwiLCJpbmRleE9mIiwibWdubFJlZnJlc2giLCJzZXRUaW1lb3V0Iiwib25GcmFtZVJlYWR5IiwibWdubEZyYW1lUmVhZHkiLCJleGVjIiwiZm5OYW1lIiwibWVzc2FnZSIsImNvbnNvbGUiLCJvcHRpb25hbFBhcmFtcyIsImxvZyIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJlbmNvZGVWYWx1ZSIsInZhbCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY29kZVZhbHVlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZ2V0U2VsZWN0ZWRWYXJpYW50IiwiY29udGVudCIsInRlbXBsYXRlQW5ub3RhdGlvbnMiLCJhbm5vdGF0aW9ucyIsIm1hdGNoIiwidmFyaWFudCIsImlzUHJldmlld0FzVmlzaXRvciIsInNlYXJjaFF1ZXJ5Iiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiZ2V0UGVyc29uYWxpemF0aW9uUGFyYW1zIiwicGFyYW1zIiwiRWRpdG9yQ29udGV4dEhlbHBlciIsIml0ZXIiLCJlbnRyaWVzIiwicmVzdWx0IiwibmV4dCIsImRvbmUiLCJrZXkiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJtZ25sUHJldmlld0FzVmlzaXRvciIsInZhcmlhbnRzIiwidG9TZWFyY2hRdWVyeSIsInF1ZXJ5U3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImpvaW4iLCJnZXRWYXJpYW50IiwiQUNUSVZBVElPTl9TVEFUVVNfTk9UX0FDVElWQVRFRCIsIkFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEIiwiQUNUSVZBVElPTl9TVEFUVVNfQUNUSVZBVEVEIiwiVkFMVUVfUFJPQ0VTU09SUyIsImdldENvbnRlbnRQYXRoIiwiYXZhaWxhYmxlQ29tcG9uZW50cyIsImdldEF2YWlsYWJsZUNvbXBvbmVudHMiLCJzaG93QWRkQnV0dG9uIiwiY2FuQWRkTW9yZUNvbXBvbmVudHMiLCJhY3RpdmF0aW9uU3RhdHVzIiwiZ2V0QWN0aXZhdGlvblN0YXR1cyIsIlBBR0VfTUFQIiwiZGlhbG9nIiwiZ2V0VmFsdWVGcm9tT2JqZWN0IiwiQVJFQV9NQVAiLCJuYW1lIiwidHlwZSIsImxhYmVsIiwiaW5oZXJpdCIsIm9wdGlvbmFsIiwiY3JlYXRlZEFyZWFOb2RlIiwic2hvd05ld0NvbXBvbmVudEFyZWEiLCJkZXNjcmlwdGlvbiIsIkNPTVBPTkVOVF9NQVAiLCJnZXRDb21tZW50U3RyaW5nIiwiZGF0YSIsInRlbXBsYXRlRGVmaW5pdGlvbiIsImN1c3RvbVBhcmFtcyIsImZvckVhY2giLCJkYXRhS2V5IiwiZGVmYXVsdFZhbHVlIiwiZ2V0RGF0YUZuIiwiY29udGVudFByb2Nlc3NvciIsIml0ZW0iLCJwdXNoIiwiYXJlYSIsImlkIiwibWF4Q29tcG9uZW50cyIsImNvbXBvbmVudENvdW50Iiwib2JqIiwibGFzdE1vZGlmaWVkIiwiRGF0ZSIsImxhc3RBY3RpdmF0ZWQiLCJnZXRUaW1lIiwiZ2V0UGFnZUNvbW1lbnRTdHJpbmciLCJwYWdlIiwiZ2V0QXJlYUNvbW1lbnRTdHJpbmciLCJhcmVhVGVtcGxhdGVEZWZpbml0aW9uIiwiYXJlYXMiLCJnZXRDb21wb25lbnRDb21tZW50U3RyaW5nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQywyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELHVD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UCxFQUE4QjtBQUNoRSw0QkFBbUJGLGdCQUFnQixDQUFDcUIsSUFBRCxFQUFPbEMsUUFBUCxFQUFpQmUsa0JBQWpCLENBQW5DO0FBQ0QsQ0FGTTtBQUlBLElBQU1vQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNYLElBQUQsRUFBT1Qsa0JBQVAsRUFBMkJZLGNBQTNCLEVBQThDO0FBQ2hGLE1BQU1YLFlBQVksR0FBRztBQUFFVyxrQkFBYyxFQUFkQTtBQUFGLEdBQXJCO0FBQ0EsTUFBTVMsc0JBQXNCLEdBQUdyQixrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNzQixLQUF6QyxHQUFpRHRCLGtCQUFrQixDQUFDc0IsS0FBbkIsQ0FBeUJiLElBQUksQ0FBQyxPQUFELENBQTdCLENBQWpELEdBQTJGLEVBQTFIO0FBQ0EsNEJBQW1CWCxnQkFBZ0IsQ0FBQ1csSUFBRCxFQUFPckIsUUFBUCxFQUFpQmlDLHNCQUFqQixFQUF5Q3BCLFlBQXpDLENBQW5DO0FBQ0QsQ0FKTTtBQU1BLElBQU1zQix5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNDLFNBQUQsRUFBWXhCLGtCQUFaLEVBQW1DO0FBQzFFLGlDQUF3QkYsZ0JBQWdCLENBQUMwQixTQUFELEVBQVkzQixhQUFaLEVBQTJCRyxrQkFBM0IsQ0FBeEM7QUFDRCxDQUZNO0FBSVE7QUFDYm9CLHNCQUFvQixFQUFwQkEsb0JBRGE7QUFFYkcsMkJBQXlCLEVBQXpCQSx5QkFGYTtBQUdiTCxzQkFBb0IsRUFBcEJBO0FBSGEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWdubC1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qISAoYykgQW5kcmVhIEdpYW1tYXJjaGkgLSBJU0MgKi9cbnZhciBzZWxmID0ge307XG50cnkge1xuICAoZnVuY3Rpb24gKFVSTFNlYXJjaFBhcmFtcywgcGx1cykge1xuICAgIGlmIChcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoJ3E9JTJCJykuZ2V0KCdxJykgIT09IHBsdXMgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe3E6IHBsdXN9KS5nZXQoJ3EnKSAhPT0gcGx1cyB8fFxuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyhbWydxJywgcGx1c11dKS5nZXQoJ3EnKSAhPT0gcGx1cyB8fFxuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcygncT1cXG4nKS50b1N0cmluZygpICE9PSAncT0lMEEnIHx8XG4gICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtxOiAnICYnfSkudG9TdHJpbmcoKSAhPT0gJ3E9KyUyNicgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe3E6ICclengnfSkudG9TdHJpbmcoKSAhPT0gJ3E9JTI1engnXG4gICAgKVxuICAgICAgdGhyb3cgVVJMU2VhcmNoUGFyYW1zO1xuICAgIHNlbGYuVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xuICB9KFVSTFNlYXJjaFBhcmFtcywgJysnKSk7XG59IGNhdGNoKFVSTFNlYXJjaFBhcmFtcykge1xuICAoZnVuY3Rpb24gKE9iamVjdCwgU3RyaW5nLCBpc0FycmF5KSB7J3VzZSBzdHJpY3QnO1xuICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICB2YXIgZmluZCA9IC9bISdcXChcXCl+XXwlMjB8JTAwL2c7XG4gICAgdmFyIGZpbmRQZXJjZW50U2lnbiA9IC8lKD8hWzAtOWEtZkEtRl17Mn0pL2c7XG4gICAgdmFyIHBsdXMgPSAvXFwrL2c7XG4gICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnfic6ICclN0UnLFxuICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgfTtcbiAgICB2YXIgcHJvdG8gPSB7XG4gICAgICBhcHBlbmQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGFwcGVuZFRvKHRoaXMuX3VuZ2FwLCBrZXksIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBkZWxldGU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3VuZ2FwW2tleV07XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhrZXkpID8gdGhpcy5fdW5nYXBba2V5XVswXSA6IG51bGw7XG4gICAgICB9LFxuICAgICAgZ2V0QWxsOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhrZXkpID8gdGhpcy5fdW5nYXBba2V5XS5zbGljZSgwKSA6IFtdO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5IGluIHRoaXMuX3VuZ2FwO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdW5nYXBba2V5XSA9IFtTdHJpbmcodmFsdWUpXTtcbiAgICAgIH0sXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VsZi5fdW5nYXApXG4gICAgICAgICAgc2VsZi5fdW5nYXBba2V5XS5mb3JFYWNoKGludm9rZSwga2V5KTtcbiAgICAgICAgZnVuY3Rpb24gaW52b2tlKHZhbHVlKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgU3RyaW5nKGtleSksIHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0sXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVlcnkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3VuZ2FwKSB7XG4gICAgICAgICAgdmFyIGVuY29kZWQgPSBlbmNvZGUoa2V5KTtcbiAgICAgICAgICBmb3IgKHZhclxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3VuZ2FwW2tleV07XG4gICAgICAgICAgICBpIDwgdmFsdWUubGVuZ3RoOyBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHF1ZXJ5LnB1c2goZW5jb2RlZCArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnkuam9pbignJicpO1xuICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIga2V5IGluIHByb3RvKVxuICAgICAgZGVmaW5lUHJvcGVydHkoVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZSwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBwcm90b1trZXldXG4gICAgICB9KTtcbiAgICBzZWxmLlVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXMocXVlcnkpIHtcbiAgICAgIHZhciBkaWN0ID0gY3JlYXRlKG51bGwpO1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ191bmdhcCcsIHt2YWx1ZTogZGljdH0pO1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgIXF1ZXJ5OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHR5cGVvZiBxdWVyeSA9PT0gJ3N0cmluZyc6XG4gICAgICAgICAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKHZhclxuICAgICAgICAgICAgcGFpcnMgPSBxdWVyeS5zcGxpdCgnJicpLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSBwYWlycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnNbaV07XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc9Jyk7XG4gICAgICAgICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICAgICAgICBkaWN0LFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGgpe1xuICAgICAgICAgICAgICBhcHBlbmRUbyhcbiAgICAgICAgICAgICAgICBkaWN0LFxuICAgICAgICAgICAgICAgIGRlY29kZSh2YWx1ZSksXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgaXNBcnJheShxdWVyeSk6XG4gICAgICAgICAgZm9yICh2YXJcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHF1ZXJ5W2ldO1xuICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgdmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvckVhY2gnIGluIHF1ZXJ5OlxuICAgICAgICAgIHF1ZXJ5LmZvckVhY2goYWRkRWFjaCwgZGljdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHF1ZXJ5KVxuICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBxdWVyeVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFYWNoKHZhbHVlLCBrZXkpIHtcbiAgICAgIGFwcGVuZFRvKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciByZXMgPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywnKSA6IHZhbHVlO1xuICAgICAgaWYgKGtleSBpbiBkaWN0KVxuICAgICAgICBkaWN0W2tleV0ucHVzaChyZXMpO1xuICAgICAgZWxzZVxuICAgICAgICBkaWN0W2tleV0gPSBbcmVzXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKGZpbmRQZXJjZW50U2lnbiwgJyUyNScpLnJlcGxhY2UocGx1cywgJyAnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoZmluZCwgcmVwbGFjZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfVxuXG4gIH0oT2JqZWN0LCBTdHJpbmcsIEFycmF5LmlzQXJyYXkpKTtcbn1cblxuKGZ1bmN0aW9uIChVUkxTZWFyY2hQYXJhbXNQcm90bykge1xuXG4gIHZhciBpdGVyYWJsZSA9IGZhbHNlO1xuICB0cnkgeyBpdGVyYWJsZSA9ICEhU3ltYm9sLml0ZXJhdG9yOyB9IGNhdGNoIChvX08pIHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ2ZvckVhY2gnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmFtZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgdGhpcy50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoLz1bXFxzXFxTXSo/KD86JnwkKS9nLCAnPScpXG4gICAgICAgICAgLnNwbGl0KCc9JylcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKCFuYW1lLmxlbmd0aCB8fCBuYW1lIGluIG5hbWVzKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAobmFtZXNbbmFtZV0gPSBzZWxmLmdldEFsbChuYW1lKSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCBzZWxmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgna2V5cycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgZnVuY3Rpb24odmFsdWUsIGtleSkgeyB0aGlzLnB1c2goa2V5KTsgfSk7XG4gICAgfTtcbiAgfVxuXG4gICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgndmFsdWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgZnVuY3Rpb24odmFsdWUsIGtleSkgeyB0aGlzLnB1c2godmFsdWUpOyB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ2VudHJpZXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsgdGhpcy5wdXNoKFtrZXksIHZhbHVlXSk7IH0pO1xuICAgIH07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaXRlcmFibGUgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IFVSTFNlYXJjaFBhcmFtc1Byb3RvLmVudHJpZXM7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoISgnc29ydCcgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uc29ydCA9IGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgICB2YXJcbiAgICAgICAgZW50cmllcyA9IHRoaXMuZW50cmllcygpLFxuICAgICAgICBlbnRyeSA9IGVudHJpZXMubmV4dCgpLFxuICAgICAgICBkb25lID0gZW50cnkuZG9uZSxcbiAgICAgICAga2V5cyA9IFtdLFxuICAgICAgICB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgICBpLCBrZXksIHZhbHVlXG4gICAgICA7XG4gICAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgICAgdmFsdWUgPSBlbnRyeS52YWx1ZTtcbiAgICAgICAga2V5ID0gdmFsdWVbMF07XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICBpZiAoIShrZXkgaW4gdmFsdWVzKSkge1xuICAgICAgICAgIHZhbHVlc1trZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2tleV0ucHVzaCh2YWx1ZVsxXSk7XG4gICAgICAgIGVudHJ5ID0gZW50cmllcy5uZXh0KCk7XG4gICAgICAgIGRvbmUgPSBlbnRyeS5kb25lO1xuICAgICAgfVxuICAgICAgLy8gbm90IHRoZSBjaGFtcGlvbiBpbiBlZmZpY2llbmN5XG4gICAgICAvLyBidXQgdGhlc2UgdHdvIGJpdHMganVzdCBkbyB0aGUgam9iXG4gICAgICBrZXlzLnNvcnQoKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlKGtleXNbaV0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZXNba2V5XS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXRlcmF0b3Ioc2VsZiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBzZWxmLmZvckVhY2goY2FsbGJhY2ssIGl0ZW1zKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiBpdGVyYWJsZSA/XG4gICAgICBpdGVtc1tTeW1ib2wuaXRlcmF0b3JdKCkgOlxuICAgICAge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHZvaWQgMCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIChmdW5jdGlvbiAoT2JqZWN0KSB7XG4gICAgdmFyXG4gICAgICBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zUG9sbHV0ZSA9IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgICAgZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uYXBwZW5kLmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMuX3VzcCwgbmFtZSA/ICgnPycgKyBuYW1lKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZWwobmFtZSkge1xuICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmRlbGV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMuX3VzcCwgbmFtZSA/ICgnPycgKyBuYW1lKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5zZXQuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgICBzZWFyY2guc2V0LmNhbGwodGhpcy5fdXNwLCBuYW1lID8gKCc/JyArIG5hbWUpIDogJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3AsIHZhbHVlKSB7XG4gICAgICAgICAgc3AuYXBwZW5kID0gYXBwZW5kO1xuICAgICAgICAgIHNwLmRlbGV0ZSA9IGRlbDtcbiAgICAgICAgICBzcC5zZXQgPSBzZXQ7XG4gICAgICAgICAgcmV0dXJuIGRQKHNwLCAnX3VzcCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zQ3JlYXRlID0gZnVuY3Rpb24gKHBvbGx1dGVTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIHNwKSB7XG4gICAgICAgICAgZFAoXG4gICAgICAgICAgICBvYmosICdfc2VhcmNoUGFyYW1zJywge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogcG9sbHV0ZVNlYXJjaFBhcmFtcyhzcCwgb2JqKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHNwO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZVNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uIChzcCkge1xuICAgICAgICB2YXIgYXBwZW5kID0gc3AuYXBwZW5kO1xuICAgICAgICBzcC5hcHBlbmQgPSBVUkxTZWFyY2hQYXJhbXNQcm90by5hcHBlbmQ7XG4gICAgICAgIFVSTFNlYXJjaFBhcmFtcy5jYWxsKHNwLCBzcC5fdXNwLnNlYXJjaC5zbGljZSgxKSk7XG4gICAgICAgIHNwLmFwcGVuZCA9IGFwcGVuZDtcbiAgICAgIH0sXG4gICAgICB2ZXJpZnlTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAob2JqLCBDbGFzcykge1xuICAgICAgICBpZiAoIShvYmogaW5zdGFuY2VvZiBDbGFzcykpIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCInc2VhcmNoUGFyYW1zJyBhY2Nlc3NlZCBvbiBhbiBvYmplY3QgdGhhdCBcIiArXG4gICAgICAgICAgXCJkb2VzIG5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlIFwiICsgQ2xhc3MubmFtZVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHVwZ3JhZGVDbGFzcyA9IGZ1bmN0aW9uIChDbGFzcykge1xuICAgICAgICB2YXJcbiAgICAgICAgICBDbGFzc1Byb3RvID0gQ2xhc3MucHJvdG90eXBlLFxuICAgICAgICAgIHNlYXJjaFBhcmFtcyA9IGdPUEQoQ2xhc3NQcm90bywgJ3NlYXJjaFBhcmFtcycpLFxuICAgICAgICAgIGhyZWYgPSBnT1BEKENsYXNzUHJvdG8sICdocmVmJyksXG4gICAgICAgICAgc2VhcmNoID0gZ09QRChDbGFzc1Byb3RvLCAnc2VhcmNoJyksXG4gICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zXG4gICAgICAgIDtcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMgJiYgc2VhcmNoICYmIHNlYXJjaC5zZXQpIHtcbiAgICAgICAgICBjcmVhdGVTZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXNDcmVhdGUoXG4gICAgICAgICAgICBjcmVhdGVTZWFyY2hQYXJhbXNQb2xsdXRlKHNlYXJjaClcbiAgICAgICAgICApO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgICAgICAgICAgQ2xhc3NQcm90byxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaHJlZjoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGhyZWYuZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwID0gdGhpcy5fc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgaHJlZi5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3ApIHVwZGF0ZVNlYXJjaFBhcmFtcyhzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2guZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwID0gdGhpcy5fc2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChzcCkgdXBkYXRlU2VhcmNoUGFyYW1zKHNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZ5U2VhcmNoUGFyYW1zKHRoaXMsIENsYXNzKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hQYXJhbXMgfHwgY3JlYXRlU2VhcmNoUGFyYW1zKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMuc2VhcmNoLnNsaWNlKDEpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHNwKSB7XG4gICAgICAgICAgICAgICAgICB2ZXJpZnlTZWFyY2hQYXJhbXModGhpcywgQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zKHRoaXMsIHNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgO1xuICAgIHRyeSB7XG4gICAgICB1cGdyYWRlQ2xhc3MoSFRNTEFuY2hvckVsZW1lbnQpO1xuICAgICAgaWYgKC9eZnVuY3Rpb258b2JqZWN0JC8udGVzdCh0eXBlb2YgVVJMKSAmJiBVUkwucHJvdG90eXBlKVxuICAgICAgICB1cGdyYWRlQ2xhc3MoVVJMKTtcbiAgICB9IGNhdGNoIChtZWgpIHt9XG4gIH0oT2JqZWN0KSk7XG5cbn0oc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLCBPYmplY3QpKTtcbmV4cG9ydCBkZWZhdWx0IHNlbGYuVVJMU2VhcmNoUGFyYW1zO1xuIiwiZXhwb3J0IHtcbiAgVGVtcGxhdGVBbm5vdGF0aW9ucywgRWRpdG9yQ29udGV4dEhlbHBlciwgTG9nZ2VyU2VydmljZSwgUGVyc29uYWxpemF0aW9uU2VydmljZVxufSBmcm9tICcuL3NlcnZpY2UnO1xuIiwiXG5leHBvcnQgY29uc3QgaW5JZnJhbWUgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gQm9vbGVhbih3aW5kb3cubG9jYXRpb24gIT09IHdpbmRvdy5wYXJlbnQubG9jYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluRWRpdG9yID0gKCkgPT4ge1xuICByZXR1cm4gaW5JZnJhbWUoKSAmJiAhd2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbWdubFByZXZpZXc9dHJ1ZScpICYmICF3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdtZ25sUHJldmlld0FzVmlzaXRvcj10cnVlJyk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5FZGl0b3JQcmV2aWV3ID0gKCkgPT4ge1xuICByZXR1cm4gaW5JZnJhbWUoKSAmJiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbWdubFByZXZpZXc9dHJ1ZScpIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ21nbmxQcmV2aWV3QXNWaXNpdG9yPXRydWUnKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcbiAgaWYgKGluRWRpdG9yKCkgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTC5pbmRleE9mKCc8IS0tY21zOnBhZ2UnKSA+IC0xKSB7XG4gICAgaWYgKHdpbmRvdy5tZ25sUmVmcmVzaCkge1xuICAgICAgd2luZG93Lm1nbmxSZWZyZXNoKCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cucGFyZW50Lm1nbmxSZWZyZXNoKSB7XG4gICAgICB3aW5kb3cucGFyZW50Lm1nbmxSZWZyZXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQocmVmcmVzaCwgMjAwKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvbkZyYW1lUmVhZHkgPSAoKSA9PiB7XG4gIGlmIChpbklmcmFtZSgpKSB7XG4gICAgaWYgKHdpbmRvdy5tZ25sRnJhbWVSZWFkeSkge1xuICAgICAgd2luZG93Lm1nbmxGcmFtZVJlYWR5KCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cucGFyZW50Lm1nbmxGcmFtZVJlYWR5KSB7XG4gICAgICB3aW5kb3cucGFyZW50Lm1nbmxGcmFtZVJlYWR5KCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluSWZyYW1lLFxuICBpbkVkaXRvcixcbiAgcmVmcmVzaCxcbiAgaW5FZGl0b3JQcmV2aWV3LFxuICBvbkZyYW1lUmVhZHlcbn07XG4iLCJcbmZ1bmN0aW9uIGV4ZWMoZm5OYW1lID0gJ2xvZycsIG1lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZVtmbk5hbWVdKG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZyA9IChtZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtcykgPT4ge1xuICBleGVjKCdsb2cnLCBtZXNzYWdlLCBvcHRpb25hbFBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IChtZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtcykgPT4ge1xuICBleGVjKCdpbmZvJywgbWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdhcm4gPSAobWVzc2FnZSwgLi4ub3B0aW9uYWxQYXJhbXMpID0+IHtcbiAgZXhlYygnd2FybicsIG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcnJvciA9IChtZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtcykgPT4ge1xuICBleGVjKCdlcnJvcicsIG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nLFxuICBpbmZvLFxuICB3YXJuLFxuICBlcnJvclxufTtcbiIsImltcG9ydCBFZGl0b3JDb250ZXh0SGVscGVyIGZyb20gJy4vRWRpdG9yQ29udGV4dEhlbHBlcic7XG5pbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcyc7XG5cbmZ1bmN0aW9uIGVuY29kZVZhbHVlKHZhbCkge1xuICBpZiAodHlwZW9mIGVuY29kZVVSSUNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlVmFsdWUodmFsKSB7XG4gIGlmICh0eXBlb2YgZGVjb2RlVVJJQ29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKGNvbnRlbnQsIHRlbXBsYXRlQW5ub3RhdGlvbnMpID0+IHtcbiAgaWYgKCFjb250ZW50IHx8ICF0ZW1wbGF0ZUFubm90YXRpb25zKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgY29uc3QgYW5ub3RhdGlvbnMgPSB0ZW1wbGF0ZUFubm90YXRpb25zW2NvbnRlbnRbJ0BwYXRoJ11dO1xuICBjb25zdCBtYXRjaCA9IGFubm90YXRpb25zLm1hdGNoKC9zZWxlY3RlZFZhcmlhbnQ9XCIoLispXCIvKTtcbiAgY29uc3QgdmFyaWFudCA9IG1hdGNoWzFdO1xuICByZXR1cm4gdmFyaWFudCA9PT0gY29udGVudFsnQG5hbWUnXSA/IGNvbnRlbnQgOiBjb250ZW50W3ZhcmlhbnRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzUHJldmlld0FzVmlzaXRvciA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFF1ZXJ5KTtcbiAgcmV0dXJuIHNlYXJjaFBhcmFtcy5nZXQoJ21nbmxQcmV2aWV3QXNWaXNpdG9yJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVyc29uYWxpemF0aW9uUGFyYW1zID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHt9O1xuICBpZiAoIUVkaXRvckNvbnRleHRIZWxwZXIuaW5JZnJhbWUoKSkge1xuICAgIC8vIE5vdCBpbiBQYWdlIEVkaXRvclxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hRdWVyeSk7XG4gIGNvbnN0IGl0ZXIgPSBzZWFyY2hQYXJhbXMuZW50cmllcygpO1xuICBsZXQgcmVzdWx0ID0gaXRlci5uZXh0KCk7XG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBrZXkgPSByZXN1bHQudmFsdWVbMF07XG4gICAgY29uc3QgdmFsdWUgPSByZXN1bHQudmFsdWVbMV07XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdwcmV2aWV3JykpIHtcbiAgICAgIHBhcmFtc1trZXldID0gZGVjb2RlVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICByZXN1bHQgPSBpdGVyLm5leHQoKTtcbiAgfVxuICBpZiAoaXNQcmV2aWV3QXNWaXNpdG9yKHNlYXJjaFF1ZXJ5KSkge1xuICAgIHBhcmFtcy5tZ25sUHJldmlld0FzVmlzaXRvciA9ICd0cnVlJztcbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMudmFyaWFudHMgPSAnYWxsJztcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvU2VhcmNoUXVlcnkgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5tYXAoa2V5ID0+IGAke2tleX09JHtlbmNvZGVWYWx1ZShwYXJhbXNba2V5XSl9YClcbiAgICAuam9pbignJicpO1xuICByZXR1cm4gcXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFZhcmlhbnQgPSAoY29udGVudCwgdGVtcGxhdGVBbm5vdGF0aW9ucykgPT4ge1xuICBpZiAoIUVkaXRvckNvbnRleHRIZWxwZXIuaW5FZGl0b3IoKSkge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmIChjb250ZW50ICYmIGNvbnRlbnRbJ2pjcjptaXhpblR5cGVzJ10gJiYgY29udGVudFsnamNyOm1peGluVHlwZXMnXS5pbmNsdWRlcygnbWdubDpoYXNWYXJpYW50JykpIHtcbiAgICByZXR1cm4gZ2V0U2VsZWN0ZWRWYXJpYW50KGNvbnRlbnQsIHRlbXBsYXRlQW5ub3RhdGlvbnMpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1ByZXZpZXdBc1Zpc2l0b3IsXG4gIGdldFBlcnNvbmFsaXphdGlvblBhcmFtcyxcbiAgdG9TZWFyY2hRdWVyeSxcbiAgZ2V0VmFyaWFudFxufTtcbiIsIlxuY29uc3QgQUNUSVZBVElPTl9TVEFUVVNfTk9UX0FDVElWQVRFRCA9IDA7XG5jb25zdCBBQ1RJVkFUSU9OX1NUQVRVU19NT0RJRklFRCA9IDE7XG5jb25zdCBBQ1RJVkFUSU9OX1NUQVRVU19BQ1RJVkFURUQgPSAyO1xuXG5jb25zdCBWQUxVRV9QUk9DRVNTT1JTID0ge1xuICBjb250ZW50OiBnZXRDb250ZW50UGF0aCxcbiAgYXZhaWxhYmxlQ29tcG9uZW50czogZ2V0QXZhaWxhYmxlQ29tcG9uZW50cyxcbiAgc2hvd0FkZEJ1dHRvbjogY2FuQWRkTW9yZUNvbXBvbmVudHMsXG4gIGFjdGl2YXRpb25TdGF0dXM6IGdldEFjdGl2YXRpb25TdGF0dXNcbn07XG5jb25zdCBQQUdFX01BUCA9IHtcbiAgY29udGVudDogWydAcGF0aCcsICcnXSxcbiAgZGlhbG9nOiBbJ2RpYWxvZycsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdXG59O1xuY29uc3QgQVJFQV9NQVAgPSB7XG4gIG5hbWU6IFsnQG5hbWUnLCAnJ10sXG4gIGNvbnRlbnQ6IFBBR0VfTUFQLmNvbnRlbnQsXG4gIGRpYWxvZzogUEFHRV9NQVAuZGlhbG9nLFxuICBhdmFpbGFibGVDb21wb25lbnRzOiBbJ2F2YWlsYWJsZUNvbXBvbmVudHMnLCBbXV0sXG4gIHR5cGU6IFsndHlwZScsICdsaXN0JywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgbGFiZWw6IFsndGl0bGUnLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgaW5oZXJpdDogWydpbmhlcml0YW5jZScsIGZhbHNlLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBvcHRpb25hbDogWydvcHRpb25hbCcsIGZhbHNlLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBjcmVhdGVkQXJlYU5vZGU6IFsnY3JlYXRlQXJlYU5vZGUnLCB0cnVlLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBzaG93QWRkQnV0dG9uOiBbJ21heENvbXBvbmVudHMnLCB0cnVlXSxcbiAgc2hvd05ld0NvbXBvbmVudEFyZWE6IFtudWxsLCB0cnVlXSxcbiAgZGVzY3JpcHRpb246IFsnZGVzY3JpcHRpb24nLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgYWN0aXZhdGlvblN0YXR1czogW251bGwsIDBdXG59O1xuXG5jb25zdCBDT01QT05FTlRfTUFQID0ge1xuICBjb250ZW50OiBQQUdFX01BUC5jb250ZW50LFxuICBkaWFsb2c6IFBBR0VfTUFQLmRpYWxvZyxcbiAgbGFiZWw6IFsndGl0bGUnLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgZGVzY3JpcHRpb246IFsnZGVzY3JpcHRpb24nLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XSxcbiAgYWN0aXZhdGlvblN0YXR1czogW251bGwsIDBdXG59O1xuXG5mdW5jdGlvbiBnZXRDb21tZW50U3RyaW5nKGRhdGEsIG1hcCwgdGVtcGxhdGVEZWZpbml0aW9uLCBjdXN0b21QYXJhbXMpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IFtkYXRhS2V5LCBkZWZhdWx0VmFsdWUsIGdldERhdGFGbl0gPSBtYXBba2V5XTtcbiAgICBjb25zdCBjb250ZW50UHJvY2Vzc29yID0gVkFMVUVfUFJPQ0VTU09SU1trZXldO1xuICAgIGxldCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICBpZiAoY29udGVudFByb2Nlc3Nvcikge1xuICAgICAgdmFsdWUgPSBjb250ZW50UHJvY2Vzc29yKGRhdGEsIGRhdGFLZXksIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGdldERhdGFGbikge1xuICAgICAgdmFsdWUgPSBnZXREYXRhRm4odGVtcGxhdGVEZWZpbml0aW9uLCBkYXRhS2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGFLZXkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gZGF0YVtkYXRhS2V5XSB8fCAnJztcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHsga2V5LCB2YWx1ZSB9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlICE9PSAnc3RyaW5nJyB8fCBpdGVtLnZhbHVlKSB7XG4gICAgICByZXN1bHQucHVzaChgJHtrZXl9PVwiJHtpdGVtLnZhbHVlfVwiYCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ29tcG9uZW50cyhhcmVhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgaWYgKCF0ZW1wbGF0ZURlZmluaXRpb24gfHwgIXRlbXBsYXRlRGVmaW5pdGlvbltkYXRhS2V5XSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV0pLm1hcChrZXkgPT4gdGVtcGxhdGVEZWZpbml0aW9uW2RhdGFLZXldW2tleV0uaWQpLmpvaW4oJywnKTtcbn1cblxuZnVuY3Rpb24gY2FuQWRkTW9yZUNvbXBvbmVudHMoYXJlYSwgZGF0YUtleSwgdGVtcGxhdGVEZWZpbml0aW9uLCBjdXN0b21QYXJhbXMpIHtcbiAgaWYgKCF0ZW1wbGF0ZURlZmluaXRpb24gfHwgdGVtcGxhdGVEZWZpbml0aW9uLm1heENvbXBvbmVudHMgPT0gbnVsbCB8fCAhY3VzdG9tUGFyYW1zIHx8IGN1c3RvbVBhcmFtcy5jb21wb25lbnRDb3VudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGN1c3RvbVBhcmFtcy5jb21wb25lbnRDb3VudCA8IHRlbXBsYXRlRGVmaW5pdGlvbi5tYXhDb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYga2V5ID8gb2JqW2tleV0gOiBudWxsO1xuICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgdmFsdWUgPSB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnYm9vbGVhbicgPyBCb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZW50UGF0aChkYXRhLCBrZXkpIHtcbiAgY29uc3QgdmFsdWUgPSBkYXRhID8gZGF0YVtrZXldIDogbnVsbDtcbiAgLy8gTk9URTogRW1wdHkgc3RyaW5nIGlzIGFjY2VwdGFibGUuIFNvIHdlIG5lZWQgY2hlY2sgdmFsdWUgIT0gbnVsbFxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IGB3ZWJzaXRlOiR7dmFsdWV9YCA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmF0aW9uU3RhdHVzKGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICFkYXRhWydtZ25sOmFjdGl2YXRpb25TdGF0dXMnXSB8fCBkYXRhWydtZ25sOmFjdGl2YXRpb25TdGF0dXMnXSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBBQ1RJVkFUSU9OX1NUQVRVU19OT1RfQUNUSVZBVEVEO1xuICB9XG5cbiAgY29uc3QgbGFzdE1vZGlmaWVkID0gZGF0YVsnbWdubDpsYXN0TW9kaWZpZWQnXSA/IG5ldyBEYXRlKGRhdGFbJ21nbmw6bGFzdE1vZGlmaWVkJ10pIDogbnVsbDtcbiAgY29uc3QgbGFzdEFjdGl2YXRlZCA9IGRhdGFbJ21nbmw6bGFzdEFjdGl2YXRlZCddID8gbmV3IERhdGUoZGF0YVsnbWdubDpsYXN0QWN0aXZhdGVkJ10pIDogbnVsbDtcblxuICByZXR1cm4gbGFzdE1vZGlmaWVkICYmIGxhc3RBY3RpdmF0ZWQgJiYgbGFzdE1vZGlmaWVkLmdldFRpbWUoKSA+IGxhc3RBY3RpdmF0ZWQuZ2V0VGltZSgpID8gQUNUSVZBVElPTl9TVEFUVVNfTU9ESUZJRUQgOiBBQ1RJVkFUSU9OX1NUQVRVU19BQ1RJVkFURUQ7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tbWVudFN0cmluZyA9IChwYWdlLCB0ZW1wbGF0ZURlZmluaXRpb24pID0+IHtcbiAgcmV0dXJuIGBjbXM6cGFnZSAke2dldENvbW1lbnRTdHJpbmcocGFnZSwgUEFHRV9NQVAsIHRlbXBsYXRlRGVmaW5pdGlvbil9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBcmVhQ29tbWVudFN0cmluZyA9IChhcmVhLCB0ZW1wbGF0ZURlZmluaXRpb24sIGNvbXBvbmVudENvdW50KSA9PiB7XG4gIGNvbnN0IGN1c3RvbVBhcmFtcyA9IHsgY29tcG9uZW50Q291bnQgfTtcbiAgY29uc3QgYXJlYVRlbXBsYXRlRGVmaW5pdGlvbiA9IHRlbXBsYXRlRGVmaW5pdGlvbiAmJiB0ZW1wbGF0ZURlZmluaXRpb24uYXJlYXMgPyB0ZW1wbGF0ZURlZmluaXRpb24uYXJlYXNbYXJlYVsnQG5hbWUnXV0gOiB7fTtcbiAgcmV0dXJuIGBjbXM6YXJlYSAke2dldENvbW1lbnRTdHJpbmcoYXJlYSwgQVJFQV9NQVAsIGFyZWFUZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcyl9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wb25lbnRDb21tZW50U3RyaW5nID0gKGNvbXBvbmVudCwgdGVtcGxhdGVEZWZpbml0aW9uKSA9PiB7XG4gIHJldHVybiBgY21zOmNvbXBvbmVudCAke2dldENvbW1lbnRTdHJpbmcoY29tcG9uZW50LCBDT01QT05FTlRfTUFQLCB0ZW1wbGF0ZURlZmluaXRpb24pfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFyZWFDb21tZW50U3RyaW5nLFxuICBnZXRDb21wb25lbnRDb21tZW50U3RyaW5nLFxuICBnZXRQYWdlQ29tbWVudFN0cmluZ1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVGVtcGxhdGVBbm5vdGF0aW9ucyB9IGZyb20gJy4vVGVtcGxhdGVBbm5vdGF0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRvckNvbnRleHRIZWxwZXIgfSBmcm9tICcuL0VkaXRvckNvbnRleHRIZWxwZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi9Mb2dnZXJTZXJ2aWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyc29uYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4vUGVyc29uYWxpemF0aW9uU2VydmljZSc7XG4iXSwic291cmNlUm9vdCI6IiJ9

            /***/
          },

        /***/ 'react':
          /*!************************!*\
  !*** external "react" ***!
  \************************/
          /***/ module => {
            'use strict';
            module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

            /***/
          },

        /******/
      };
      /************************************************************************/
      /******/ // The module cache
      /******/ var __webpack_module_cache__ = {};
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
          /******/ return cachedModule.exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/ exports: {},
          /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/compat get default export */
      /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = module => {
          /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
          /******/ __webpack_require__.d(getter, { a: getter });
          /******/ return getter;
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/define property getters */
      /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
          /******/ for (var key in definition) {
            /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
              /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
      })();
      /******/
      /******/ /* webpack/runtime/make namespace object */
      /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = exports => {
          /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
          }
          /******/ Object.defineProperty(exports, '__esModule', { value: true });
          /******/
        };
        /******/
      })();
      /******/
      /************************************************************************/
      var __webpack_exports__ = {};
      // This entry need to be wrapped in an IIFE because it need to be in strict mode.
      (() => {
        'use strict';
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ EditablePage: () => /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.EditablePage,
          /* harmony export */ EditableArea: () => /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.EditableArea,
          /* harmony export */ EditableComponent: () => /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.EditableComponent,
          /* harmony export */ EditorContext: () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.EditorContext,
          /* harmony export */ RendererContext: () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.RendererContext,
          /* harmony export */ EditorContextHelper: () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.EditorContextHelper,
          /* harmony export */ ComponentHelper: () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.ComponentHelper,
          /* harmony export */ PersonalizationService: () => /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_1__.PersonalizationService,
          /* harmony export */
        });
        /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ './src/component/index.js');
        /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ './src/util/index.js');
      })();

      /******/ return __webpack_exports__;
      /******/
    })();
  });
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vc3JjL2NvbXBvbmVudC9FZGl0YWJsZUFyZWEvRWRpdGFibGVBcmVhLmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlQ29tcG9uZW50L0VkaXRhYmxlQ29tcG9uZW50LmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9zcmMvY29tcG9uZW50L0VkaXRhYmxlUGFnZS9FZGl0YWJsZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci8uL3NyYy9jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci8uL3NyYy91dGlsL0NvbXBvbmVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vc3JjL3V0aWwvRWRpdG9yQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vc3JjL3V0aWwvRWRpdG9yQ29udGV4dEhlbHBlci5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vc3JjL3V0aWwvUGVyc29uYWxpemF0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vc3JjL3V0aWwvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4uL3RlbXBsYXRlLWFubm90YXRpb25zL2luZGV4LmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3IvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci8uLi90ZW1wbGF0ZS1hbm5vdGF0aW9ucy9idWlsZC9tZ25sLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BtYWdub2xpYS9yZWFjdC1lZGl0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbWFnbm9saWEvcmVhY3QtZWRpdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQG1hZ25vbGlhL3JlYWN0LWVkaXRvci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFZGl0YWJsZUFyZWEiLCJwcm9wcyIsImNvbnN0YW50cyIsImNvbnRleHQiLCJFcnJvciIsImFkZENvbW1lbnQiLCJFZGl0b3JDb250ZXh0SGVscGVyIiwicGFyZW50VGVtcGxhdGVJZCIsImNvbnRlbnQiLCJpc0Rldk1vZGUiLCJub2RlIiwicGFnZVRlbXBsYXRlSWQiLCJnZXRQYXJlbnRUZW1wbGF0ZUlkIiwidGVtcGxhdGVEZWZpbml0aW9ucyIsInRlbXBsYXRlQW5ub3RhdGlvbnMiLCJvcGVuQ29tbWVudCIsIlRlbXBsYXRlQW5ub3RhdGlvbnMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiQ0xPU0VEX0FSRUFfQ09NTUVOVCIsIm5leHRTaWJsaW5nIiwiY2xhc3NOYW1lIiwiZWxlbWVudFR5cGUiLCJjaGlsZHJlbiIsIkN1c3RvbVZpZXciLCJjdXN0b21WaWV3IiwiY29tcG9uZW50Q29udGVudHMiLCJtYXAiLCJub2RlTmFtZSIsImVsZW1lbnQiLCJSZWFjdCIsImNoaWxkQ29udGVudCIsImNoaWxkIiwiaXRlbSIsIkNvbXBvbmVudEhlbHBlciIsIlByb3BUeXBlcyIsIkVkaXRvckNvbnRleHQiLCJFZGl0YWJsZUNvbXBvbmVudCIsInJlbW92ZVJlZnMiLCJvcGVuTm9kZSIsImNsb3NlTm9kZSIsIkNMT1NFRF9DT01QT05FTlRfQ09NTUVOVCIsInJlbW92ZSIsImNvbXBvbmVudE1hcHBpbmdzIiwicmVuZGVyaW5nQ29udGVudCIsIlBlcnNvbmFsaXphdGlvblNlcnZpY2UiLCJjb21wb25lbnQiLCJpc1JlcXVpcmVkIiwiRWRpdGFibGVQYWdlIiwiZmlyc3RDaGlsZCIsImNvbnRleHRWYWx1ZSIsImdldENvbnRleHRWYWx1ZSIsImNvbmZpZyIsInByb2Nlc3MiLCJwYWdlQ29tcG9uZW50Iiwib2JqZWN0IiwiY29tcG9uZW50SGVscGVyIiwiZ2V0UmVuZGVyZWRDb21wb25lbnQiLCJnZXRDb21wb25lbnRQcm9wZXJ0aWVzIiwiY2xhc3NuYW1lcyIsImNvbXBvbmVudENvbnRlbnQiLCJjb21wb25lbnRDbGFzcyIsIkxvZ2dlclNlcnZpY2UiLCJtZXRhZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic3RhcnRzV2l0aCIsImNsb3NlQ29tbWVudCIsIm9wZW5Db21tZW50RWxlbWVudCIsImNsb3NlQ29tbWVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzZXMiLCJhcmciLCJpdGVtVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJqb2luIiwiRWRpdG9yUHJvdmlkZXIiLCJQcm92aWRlciIsIkVkaXRvckNvbnN1bWVyIiwiQ29uc3VtZXIiLCJURU1QTEFURV9JRF9QUk9QIiwiUmVuZGVyZXJDb250ZXh0IiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFJTUEsWTs7Ozs7QUFrQkosd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxTQUFMLEdBQWlCQSw0Q0FBakI7QUFGaUI7QUFHbEI7Ozs7V0FFRCw2QkFBb0I7QUFDbEIsVUFBSSxDQUFDLEtBQUtDLE9BQVYsRUFBbUI7QUFDakIsY0FBTSxJQUFJQyxLQUFKLENBQVUsdUVBQVYs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Q0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLENBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RSxnQ0FBbUI7QUFDMUYsOEJBQThCLGdDQUFtQixxREFBcUQsK0RBQStELEVBQUU7O0FBRXZLLGdGQUFnRixnQ0FBbUI7QUFDbkcsOEJBQThCLGdDQUFtQiw4REFBOEQsd0VBQXdFLEVBQUU7Ozs7Ozs7QUFPekwsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQsaUJBQWlCLGdDQUFtQjs7O0FBR3BDLE9BQU87O0FBRVAsVUFBVTtBQUNWLENBQUM7QUFDRCwyQ0FBMkMsY0FBYyxtbGpEOzs7Ozs7Ozs7OztBQ3Y2QnpELG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEiLCJmaWxlIjoibWdubC1yZWFjdC1lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRlbXBsYXRlQW5ub3RhdGlvbnMgfSBmcm9tICdAbWFnbm9saWEvdGVtcGxhdGUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgRWRpdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9FZGl0YWJsZUNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBFZGl0b3JDb250ZXh0LCBjb25zdGFudHMsIEVkaXRvckNvbnRleHRIZWxwZXIsIENvbXBvbmVudEhlbHBlclxufSBmcm9tICcuLi8uLi91dGlsJztcblxuY2xhc3MgRWRpdGFibGVBcmVhIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHBhcmVudFRlbXBsYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuYW55LFxuICAgIGVsZW1lbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbVZpZXc6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBhcmVudFRlbXBsYXRlSWQ6IG51bGwsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGVsZW1lbnRUeXBlOiAnZGl2JyxcbiAgICBjdXN0b21WaWV3OiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvbnN0YW50cyA9IGNvbnN0YW50cztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5jb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VkaXRhYmxlQXJlYSBjb21wb25lbnQgbXVzdCBiZSB3cmFwcGVkIGluc2lkZSBFZGl0YWJsZVBhZ2UgY29tcG9uZW50LicpO1xuICAgIH1cbiAgICB0aGlzLmFkZENvbW1lbnQoKTtcbiAgICBFZGl0b3JDb250ZXh0SGVscGVyLnJlZnJlc2goKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBFZGl0b3JDb250ZXh0SGVscGVyLnJlZnJlc2goKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEVkaXRvckNvbnRleHQ7XG5cbiAgZ2V0UGFyZW50VGVtcGxhdGVJZCgpIHtcbiAgICBjb25zdCB7IHBhcmVudFRlbXBsYXRlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICByZXR1cm4gcGFyZW50VGVtcGxhdGVJZCB8fCBjb250ZW50W2NvbnN0YW50cy5URU1QTEFURV9JRF9QUk9QXTtcbiAgfVxuXG4gIGFkZENvbW1lbnQoKSB7XG4gICAgY29uc3QgeyBpc0Rldk1vZGUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgKCFpc0Rldk1vZGUgJiYgIUVkaXRvckNvbnRleHRIZWxwZXIuaW5FZGl0b3IoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZVRlbXBsYXRlSWQgPSB0aGlzLmdldFBhcmVudFRlbXBsYXRlSWQoKTtcbiAgICBjb25zdCB7IHRlbXBsYXRlRGVmaW5pdGlvbnMsIHRlbXBsYXRlQW5ub3RhdGlvbnMgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBvcGVuQ29tbWVudCA9IHRlbXBsYXRlRGVmaW5pdGlvbnNcbiAgICAgID8gVGVtcGxhdGVBbm5vdGF0aW9ucy5nZXRBcmVhQ29tbWVudFN0cmluZyhjb250ZW50LCB0ZW1wbGF0ZURlZmluaXRpb25zW3BhZ2VUZW1wbGF0ZUlkXSkgOiB0ZW1wbGF0ZUFubm90YXRpb25zW2NvbnRlbnRbJ0BwYXRoJ11dO1xuXG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQob3BlbkNvbW1lbnQpLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuY29uc3RhbnRzLkNMT1NFRF9BUkVBX0NPTU1FTlQpLCB0aGlzLm5vZGUubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnQsIGNsYXNzTmFtZSwgZWxlbWVudFR5cGUsIGNoaWxkcmVuLCBjdXN0b21WaWV3OiBDdXN0b21WaWV3XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcG9uZW50Q29udGVudHMgPSBjb250ZW50WydAbm9kZXMnXS5tYXAobm9kZU5hbWUgPT4gY29udGVudFtub2RlTmFtZV0pO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlIHx8ICdkaXYnKTtcbiAgICBsZXQgY2hpbGRDb250ZW50O1xuICAgIGlmIChDdXN0b21WaWV3KSB7XG4gICAgICBjaGlsZENvbnRlbnQgPSA8Q3VzdG9tVmlldyBjb250ZW50PXtjb250ZW50fSAvPjtcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZENvbnRlbnQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBjb250ZW50IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZENvbnRlbnQgPSBjb21wb25lbnRDb250ZW50cy5tYXAoaXRlbSA9PiA8RWRpdGFibGVDb21wb25lbnQga2V5PXtpdGVtWydAaWQnXX0gY29udGVudD17aXRlbX0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGVsZW1lbnQudHlwZSByZWY9e25vZGUgPT4gdGhpcy5ub2RlID0gbm9kZX0ga2V5PXtjb250ZW50WydAaWQnXX0gY2xhc3NOYW1lPXtDb21wb25lbnRIZWxwZXIuY2xhc3NuYW1lcyhjbGFzc05hbWUpfT5cbiAgICAgICAge2NoaWxkQ29udGVudH1cbiAgICAgIDwvZWxlbWVudC50eXBlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdGFibGVBcmVhO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRlbXBsYXRlQW5ub3RhdGlvbnMgfSBmcm9tICdAbWFnbm9saWEvdGVtcGxhdGUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHtcbiAgRWRpdG9yQ29udGV4dCwgY29uc3RhbnRzLCBDb21wb25lbnRIZWxwZXIsIEVkaXRvckNvbnRleHRIZWxwZXIsIFBlcnNvbmFsaXphdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRhYmxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb25zdGFudHMgPSBjb25zdGFudHM7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZENvbW1lbnQoKTtcbiAgICB0aGlzLnJlbW92ZVJlZnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEVkaXRvckNvbnRleHQ7XG5cbiAgYWRkQ29tbWVudCgpIHtcbiAgICBjb25zdCB7IGlzRGV2TW9kZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXRoaXMub3Blbk5vZGUgfHwgIXRoaXMuY2xvc2VOb2RlIHx8ICghaXNEZXZNb2RlICYmICFFZGl0b3JDb250ZXh0SGVscGVyLmluRWRpdG9yKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VUZW1wbGF0ZUlkID0gY29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF07XG4gICAgY29uc3QgeyB0ZW1wbGF0ZURlZmluaXRpb25zLCB0ZW1wbGF0ZUFubm90YXRpb25zIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKHRlbXBsYXRlRGVmaW5pdGlvbnMpIHtcbiAgICAgIHRoaXMub3Blbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudChUZW1wbGF0ZUFubm90YXRpb25zLmdldENvbXBvbmVudENvbW1lbnRTdHJpbmcoY29udGVudCwgdGVtcGxhdGVEZWZpbml0aW9uc1twYWdlVGVtcGxhdGVJZF0pKSwgdGhpcy5vcGVuTm9kZSk7XG4gICAgICB0aGlzLmNsb3NlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuY29uc3RhbnRzLkNMT1NFRF9DT01QT05FTlRfQ09NTUVOVCksIHRoaXMuY2xvc2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2UgaWYgKHRlbXBsYXRlQW5ub3RhdGlvbnMpIHtcbiAgICAgIHRoaXMub3Blbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZW1wbGF0ZUFubm90YXRpb25zW2NvbnRlbnRbJ0BwYXRoJ11dKSwgdGhpcy5vcGVuTm9kZSk7XG4gICAgICB0aGlzLmNsb3NlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVDb21tZW50KHRoaXMuY29uc3RhbnRzLkNMT1NFRF9DT01QT05FTlRfQ09NTUVOVCksIHRoaXMuY2xvc2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVSZWZzKCkge1xuICAgIGlmICghdGhpcy5vcGVuTm9kZSB8fCAhdGhpcy5jbG9zZU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuTm9kZS5yZW1vdmUoKTtcbiAgICB0aGlzLmNsb3NlTm9kZS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb21wb25lbnRNYXBwaW5ncywgdGVtcGxhdGVBbm5vdGF0aW9ucyB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHJlbmRlcmluZ0NvbnRlbnQgPSB0ZW1wbGF0ZUFubm90YXRpb25zID8gUGVyc29uYWxpemF0aW9uU2VydmljZS5nZXRWYXJpYW50KGNvbnRlbnQsIHRlbXBsYXRlQW5ub3RhdGlvbnMpIDogY29udGVudDtcbiAgICBjb25zdCBjb21wb25lbnQgPSBDb21wb25lbnRIZWxwZXIuZ2V0UmVuZGVyZWRDb21wb25lbnQocmVuZGVyaW5nQ29udGVudCwgY29tcG9uZW50TWFwcGluZ3MpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgcmVmPXtub2RlID0+IHRoaXMub3Blbk5vZGUgPSBub2RlfSAvPlxuICAgICAgICB7Y29tcG9uZW50fVxuICAgICAgICA8ZGl2IHJlZj17bm9kZSA9PiB0aGlzLmNsb3NlTm9kZSA9IG5vZGV9IC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVGVtcGxhdGVBbm5vdGF0aW9ucyB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQge1xuICBFZGl0b3JQcm92aWRlciwgQ29tcG9uZW50SGVscGVyLCBjb25zdGFudHMsIEVkaXRvckNvbnRleHRIZWxwZXIsIFBlcnNvbmFsaXphdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmNsYXNzIEVkaXRhYmxlUGFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG4gICAgY29udGVudDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0ZW1wbGF0ZURlZmluaXRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRlbXBsYXRlQW5ub3RhdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgY29tcG9uZW50TWFwcGluZ3M6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIHRlbXBsYXRlRGVmaW5pdGlvbnM6IG51bGwsXG4gICAgdGVtcGxhdGVBbm5vdGF0aW9uczogbnVsbCxcbiAgICBjb25maWc6IHtcbiAgICAgIGNvbXBvbmVudE1hcHBpbmdzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYWRkQ29tbWVudCgpO1xuICAgIEVkaXRvckNvbnRleHRIZWxwZXIub25GcmFtZVJlYWR5KCk7XG4gICAgRWRpdG9yQ29udGV4dEhlbHBlci5yZWZyZXNoKCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMubm9kZS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuYWRkQ29tbWVudCgpO1xuICAgIEVkaXRvckNvbnRleHRIZWxwZXIub25GcmFtZVJlYWR5KCk7XG4gICAgRWRpdG9yQ29udGV4dEhlbHBlci5yZWZyZXNoKCk7XG4gIH1cblxuICBhZGRDb21tZW50KCkge1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHRoaXMuZ2V0Q29udGV4dFZhbHVlKCk7XG4gICAgaWYgKCF0aGlzLm5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbnRleHRWYWx1ZS5jb250ZW50KSB7XG4gICAgICBpZiAoY29udGV4dFZhbHVlLnRlbXBsYXRlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmFkZENvbW1lbnQodGhpcy5ub2RlLCBUZW1wbGF0ZUFubm90YXRpb25zLmdldFBhZ2VDb21tZW50U3RyaW5nKGNvbnRleHRWYWx1ZS5jb250ZW50LCBjb250ZXh0VmFsdWUudGVtcGxhdGVEZWZpbml0aW9uc1tjb250ZXh0VmFsdWUuY29udGVudFtjb25zdGFudHMuVEVNUExBVEVfSURfUFJPUF1dKSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRleHRWYWx1ZS50ZW1wbGF0ZUFubm90YXRpb25zKSB7XG4gICAgICAgIENvbXBvbmVudEhlbHBlci5hZGRDb21tZW50KHRoaXMubm9kZSwgY29udGV4dFZhbHVlLnRlbXBsYXRlQW5ub3RhdGlvbnNbY29udGV4dFZhbHVlLmNvbnRlbnRbJ0BwYXRoJ11dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb250ZXh0VmFsdWUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGVtcGxhdGVEZWZpbml0aW9ucywgdGVtcGxhdGVBbm5vdGF0aW9ucywgY29udGVudCwgY29uZmlnXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb21wb25lbnRNYXBwaW5ncyB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGlzRGV2TW9kZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgICAgdGVtcGxhdGVEZWZpbml0aW9ucyxcbiAgICAgIHRlbXBsYXRlQW5ub3RhdGlvbnMsXG4gICAgICBjb21wb25lbnRNYXBwaW5ncyxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBpc0Rldk1vZGVcbiAgICB9O1xuICAgIHJldHVybiBjb250ZXh0VmFsdWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gdGhpcy5nZXRDb250ZXh0VmFsdWUoKTtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGVudCwgdGVtcGxhdGVBbm5vdGF0aW9ucyB9ID0gY29udGV4dFZhbHVlO1xuICAgIGNvbnN0IHJlbmRlcmluZ0NvbnRlbnQgPSB0ZW1wbGF0ZUFubm90YXRpb25zID8gUGVyc29uYWxpemF0aW9uU2VydmljZS5nZXRWYXJpYW50KGNvbnRlbnQsIHRlbXBsYXRlQW5ub3RhdGlvbnMpIDogY29udGVudDtcbiAgICBjb25zdCBwYWdlQ29tcG9uZW50ID0gY2hpbGRyZW4gfHwgQ29tcG9uZW50SGVscGVyLmdldFJlbmRlcmVkQ29tcG9uZW50KHJlbmRlcmluZ0NvbnRlbnQsIGNvbnRleHRWYWx1ZS5jb21wb25lbnRNYXBwaW5ncyk7XG4gICAgLy8gTk9URTogV2UgbmVlZCBhIGRpdiB0YWcgYXMgYSBwYXJlbnQgbm9kZSBmb3IgUGFnZSdzIGNoaWxkIEhUTUwuIEl0IHdpbGwgY2F1c2UgYW4gaXNzdWUgaWYgd2VcbiAgICAvLyBkb24ndCBoYXZlIGEgcGFyZW50IG5vZGUuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFZGl0b3JQcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cbiAgICAgICAgPGRpdiByZWY9e25vZGUgPT4gdGhpcy5ub2RlID0gbm9kZX0ga2V5PXtjb250ZXh0VmFsdWUuY29udGVudFsnQGlkJ119PlxuICAgICAgICAgIHtwYWdlQ29tcG9uZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRWRpdG9yUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZVBhZ2U7XG4iLCJleHBvcnQgeyBFZGl0YWJsZVBhZ2UgfSBmcm9tICcuL0VkaXRhYmxlUGFnZSc7XG5leHBvcnQgeyBFZGl0YWJsZUFyZWEgfSBmcm9tICcuL0VkaXRhYmxlQXJlYSc7XG5leHBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vRWRpdGFibGVDb21wb25lbnQnXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnRIZWxwZXIoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0UmVuZGVyZWRDb21wb25lbnQsIGdldENvbXBvbmVudFByb3BlcnRpZXMsIGFkZENvbW1lbnQsIGNsYXNzbmFtZXNcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudChjb21wb25lbnRDb250ZW50LCBjb21wb25lbnRNYXBwaW5ncykge1xuICAgIGlmICghY29tcG9uZW50Q29udGVudCB8fCAhY29tcG9uZW50TWFwcGluZ3MpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IGNvbXBvbmVudE1hcHBpbmdzW2NvbXBvbmVudENvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdXTtcbiAgICBpZiAoIWNvbXBvbmVudENsYXNzKSB7XG4gICAgICBMb2dnZXJTZXJ2aWNlLmVycm9yKGBDb21wb25lbnQgd2l0aCBJRCAke2NvbXBvbmVudENvbnRlbnRbY29uc3RhbnRzLlRFTVBMQVRFX0lEX1BST1BdfSBpcyBub3QgbWFwcGVkLmApO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudENsYXNzLCBnZXRDb21wb25lbnRQcm9wZXJ0aWVzKGNvbXBvbmVudENvbnRlbnQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbXBvbmVudFByb3BlcnRpZXMoY29tcG9uZW50Q29udGVudCkge1xuICAgIGlmICghY29tcG9uZW50Q29udGVudCB8fCB0eXBlb2YgY29tcG9uZW50Q29udGVudCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICBjb25zdCBtZXRhZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGNvbXBvbmVudENvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnQCcpIHx8IGtleS5zdGFydHNXaXRoKCdtZ25sOicpIHx8IGtleS5zdGFydHNXaXRoKCdqY3I6JykpIHtcbiAgICAgICAgbWV0YWRhdGFba2V5XSA9IGNvbXBvbmVudENvbnRlbnRba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzW2tleV0gPSBjb21wb25lbnRDb250ZW50W2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJvcHMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50KGVsZW1lbnQsIG9wZW5Db21tZW50LCBjbG9zZUNvbW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3BlbkNvbW1lbnQpIHtcbiAgICAgIGNvbnN0IG9wZW5Db21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQob3BlbkNvbW1lbnQpO1xuICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUob3BlbkNvbW1lbnRFbGVtZW50LCBlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAoY2xvc2VDb21tZW50KSB7XG4gICAgICBjb25zdCBjbG9zZUNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjbG9zZUNvbW1lbnQpO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUNvbW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGFzc25hbWVzKC4uLmFyZykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICBhcmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbVR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICAgIGlmIChpdGVtVHlwZSA9PT0gJ3N0cmluZycgfHwgaXRlbVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NuYW1lcyguLi5pdGVtKSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW1ba2V5XSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50SGVscGVyKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFZGl0b3JDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGNvbnN0IEVkaXRvclByb3ZpZGVyID0gRWRpdG9yQ29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCBjb25zdCBFZGl0b3JDb25zdW1lciA9IEVkaXRvckNvbnRleHQuQ29uc3VtZXI7XG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb250ZXh0O1xuIiwiaW1wb3J0IHsgRWRpdG9yQ29udGV4dEhlbHBlciB9IGZyb20gJ0BtYWdub2xpYS90ZW1wbGF0ZS1hbm5vdGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvckNvbnRleHRIZWxwZXI7XG4iLCJpbXBvcnQgeyBQZXJzb25hbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQG1hZ25vbGlhL3RlbXBsYXRlLWFubm90YXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxpemF0aW9uU2VydmljZTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQ0xPU0VEX0FSRUFfQ09NTUVOVDogJy9jbXM6YXJlYScsXG4gIENMT1NFRF9DT01QT05FTlRfQ09NTUVOVDogJy9jbXM6Y29tcG9uZW50JyxcbiAgVEVNUExBVEVfSURfUFJPUDogJ21nbmw6dGVtcGxhdGUnXG59O1xuIiwiaW1wb3J0IEVkaXRvckNvbnRleHQsIHsgRWRpdG9yQ29uc3VtZXIsIEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi9FZGl0b3JDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnRIZWxwZXIgfSBmcm9tICcuL0NvbXBvbmVudEhlbHBlcic7XG5leHBvcnQgeyBFZGl0b3JDb250ZXh0LCBFZGl0b3JDb25zdW1lciwgRWRpdG9yUHJvdmlkZXIgfTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUmVuZGVyZXJDb250ZXh0IGlzIGRlcHJlY2F0ZWQuIFVzZSBFZGl0b3JDb250ZXh0IGluc3RlYWRcbiAqL1xuY29uc3QgUmVuZGVyZXJDb250ZXh0ID0gRWRpdG9yQ29udGV4dDtcbmV4cG9ydCB7IFJlbmRlcmVyQ29udGV4dCB9O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0b3JDb250ZXh0SGVscGVyIH0gZnJvbSAnLi9FZGl0b3JDb250ZXh0SGVscGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVyc29uYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4vUGVyc29uYWxpemF0aW9uU2VydmljZSc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9idWlsZC9tZ25sLXNlcnZpY2UubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnVpbGQvbWdubC1zZXJ2aWNlLmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvZXNtL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2VzbS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiEgKGMpIEFuZHJlYSBHaWFtbWFyY2hpIC0gSVNDICovXG52YXIgc2VsZiA9IHt9O1xudHJ5IHtcbiAgKGZ1bmN0aW9uIChVUkxTZWFyY2hQYXJhbXMsIHBsdXMpIHtcbiAgICBpZiAoXG4gICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKCdxPSUyQicpLmdldCgncScpICE9PSBwbHVzIHx8XG4gICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtxOiBwbHVzfSkuZ2V0KCdxJykgIT09IHBsdXMgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoW1sncScsIHBsdXNdXSkuZ2V0KCdxJykgIT09IHBsdXMgfHxcbiAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoJ3E9XFxuJykudG9TdHJpbmcoKSAhPT0gJ3E9JTBBJyB8fFxuICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7cTogJyAmJ30pLnRvU3RyaW5nKCkgIT09ICdxPSslMjYnIHx8XG4gICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtxOiAnJXp4J30pLnRvU3RyaW5nKCkgIT09ICdxPSUyNXp4J1xuICAgIClcbiAgICAgIHRocm93IFVSTFNlYXJjaFBhcmFtcztcbiAgICBzZWxmLlVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbiAgfShVUkxTZWFyY2hQYXJhbXMsICcrJykpO1xufSBjYXRjaChVUkxTZWFyY2hQYXJhbXMpIHtcbiAgKGZ1bmN0aW9uIChPYmplY3QsIFN0cmluZywgaXNBcnJheSkgeyd1c2Ugc3RyaWN0JztcbiAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgdmFyIGZpbmQgPSAvWyEnXFwoXFwpfl18JTIwfCUwMC9nO1xuICAgIHZhciBmaW5kUGVyY2VudFNpZ24gPSAvJSg/IVswLTlhLWZBLUZdezJ9KS9nO1xuICAgIHZhciBwbHVzID0gL1xcKy9nO1xuICAgIHZhciByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJ34nOiAnJTdFJyxcbiAgICAgICclMjAnOiAnKycsXG4gICAgICAnJTAwJzogJ1xceDAwJ1xuICAgIH07XG4gICAgdmFyIHByb3RvID0ge1xuICAgICAgYXBwZW5kOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBhcHBlbmRUbyh0aGlzLl91bmdhcCwga2V5LCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZGVsZXRlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl91bmdhcFtrZXldO1xuICAgICAgfSxcbiAgICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3VuZ2FwW2tleV1bMF0gOiBudWxsO1xuICAgICAgfSxcbiAgICAgIGdldEFsbDogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3VuZ2FwW2tleV0uc2xpY2UoMCkgOiBbXTtcbiAgICAgIH0sXG4gICAgICBoYXM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSBpbiB0aGlzLl91bmdhcDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VuZ2FwW2tleV0gPSBbU3RyaW5nKHZhbHVlKV07XG4gICAgICB9LFxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNlbGYuX3VuZ2FwKVxuICAgICAgICAgIHNlbGYuX3VuZ2FwW2tleV0uZm9yRWFjaChpbnZva2UsIGtleSk7XG4gICAgICAgIGZ1bmN0aW9uIGludm9rZSh2YWx1ZSkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIFN0cmluZyhrZXkpLCBzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl91bmdhcCkge1xuICAgICAgICAgIHZhciBlbmNvZGVkID0gZW5jb2RlKGtleSk7XG4gICAgICAgICAgZm9yICh2YXJcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl91bmdhcFtrZXldO1xuICAgICAgICAgICAgaSA8IHZhbHVlLmxlbmd0aDsgaSsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxdWVyeS5wdXNoKGVuY29kZWQgKyAnPScgKyBlbmNvZGUodmFsdWVbaV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIGtleSBpbiBwcm90bylcbiAgICAgIGRlZmluZVByb3BlcnR5KFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUsIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogcHJvdG9ba2V5XVxuICAgICAgfSk7XG4gICAgc2VsZi5VUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KSB7XG4gICAgICB2YXIgZGljdCA9IGNyZWF0ZShudWxsKTtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdfdW5nYXAnLCB7dmFsdWU6IGRpY3R9KTtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlICFxdWVyeTpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnOlxuICAgICAgICAgIGlmIChxdWVyeS5jaGFyQXQoMCkgPT09ICc/Jykge1xuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICh2YXJcbiAgICAgICAgICAgIHBhaXJzID0gcXVlcnkuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKytcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuICAgICAgICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgICAgICAgZGljdCxcbiAgICAgICAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoMCwgaW5kZXgpKSxcbiAgICAgICAgICAgICAgICBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoKXtcbiAgICAgICAgICAgICAgYXBwZW5kVG8oXG4gICAgICAgICAgICAgICAgZGljdCxcbiAgICAgICAgICAgICAgICBkZWNvZGUodmFsdWUpLFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzQXJyYXkocXVlcnkpOlxuICAgICAgICAgIGZvciAodmFyXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBxdWVyeVtpXTtcbiAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb3JFYWNoJyBpbiBxdWVyeTpcbiAgICAgICAgICBxdWVyeS5mb3JFYWNoKGFkZEVhY2gsIGRpY3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBxdWVyeSlcbiAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGtleSwgcXVlcnlba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRWFjaCh2YWx1ZSwga2V5KSB7XG4gICAgICBhcHBlbmRUbyh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZTtcbiAgICAgIGlmIChrZXkgaW4gZGljdClcbiAgICAgICAgZGljdFtrZXldLnB1c2gocmVzKTtcbiAgICAgIGVsc2VcbiAgICAgICAgZGljdFtrZXldID0gW3Jlc107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZShmaW5kUGVyY2VudFNpZ24sICclMjUnKS5yZXBsYWNlKHBsdXMsICcgJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKGZpbmQsIHJlcGxhY2VyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgIH1cblxuICB9KE9iamVjdCwgU3RyaW5nLCBBcnJheS5pc0FycmF5KSk7XG59XG5cbihmdW5jdGlvbiAoVVJMU2VhcmNoUGFyYW1zUHJvdG8pIHtcblxuICB2YXIgaXRlcmFibGUgPSBmYWxzZTtcbiAgdHJ5IHsgaXRlcmFibGUgPSAhIVN5bWJvbC5pdGVyYXRvcjsgfSBjYXRjaCAob19PKSB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICghKCdmb3JFYWNoJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIG5hbWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHRoaXMudG9TdHJpbmcoKVxuICAgICAgICAgIC5yZXBsYWNlKC89W1xcc1xcU10qPyg/OiZ8JCkvZywgJz0nKVxuICAgICAgICAgIC5zcGxpdCgnPScpXG4gICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghbmFtZS5sZW5ndGggfHwgbmFtZSBpbiBuYW1lcylcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgKG5hbWVzW25hbWVdID0gc2VsZi5nZXRBbGwobmFtZSkpLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgc2VsZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ2tleXMnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsgdGhpcy5wdXNoKGtleSk7IH0pO1xuICAgIH07XG4gIH1cblxuICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ3ZhbHVlcycgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG8pKSB7XG4gICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8udmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHsgdGhpcy5wdXNoKHZhbHVlKTsgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICghKCdlbnRyaWVzJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90bykpIHtcbiAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5lbnRyaWVzID0gZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcih0aGlzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7IHRoaXMucHVzaChba2V5LCB2YWx1ZV0pOyB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGl0ZXJhYmxlICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvW1N5bWJvbC5pdGVyYXRvcl0gPSBVUkxTZWFyY2hQYXJhbXNQcm90by5lbnRyaWVzO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCEoJ3NvcnQnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvKSkge1xuICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLnNvcnQgPSBmdW5jdGlvbiBzb3J0KCkge1xuICAgICAgdmFyXG4gICAgICAgIGVudHJpZXMgPSB0aGlzLmVudHJpZXMoKSxcbiAgICAgICAgZW50cnkgPSBlbnRyaWVzLm5leHQoKSxcbiAgICAgICAgZG9uZSA9IGVudHJ5LmRvbmUsXG4gICAgICAgIGtleXMgPSBbXSxcbiAgICAgICAgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgICAgaSwga2V5LCB2YWx1ZVxuICAgICAgO1xuICAgICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHZhbHVlID0gZW50cnkudmFsdWU7XG4gICAgICAgIGtleSA9IHZhbHVlWzBdO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgaWYgKCEoa2V5IGluIHZhbHVlcykpIHtcbiAgICAgICAgICB2YWx1ZXNba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1trZXldLnB1c2godmFsdWVbMV0pO1xuICAgICAgICBlbnRyeSA9IGVudHJpZXMubmV4dCgpO1xuICAgICAgICBkb25lID0gZW50cnkuZG9uZTtcbiAgICAgIH1cbiAgICAgIC8vIG5vdCB0aGUgY2hhbXBpb24gaW4gZWZmaWNpZW5jeVxuICAgICAgLy8gYnV0IHRoZXNlIHR3byBiaXRzIGp1c3QgZG8gdGhlIGpvYlxuICAgICAga2V5cy5zb3J0KCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmRlbGV0ZShrZXlzW2ldKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWVzW2tleV0uc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yKHNlbGYsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgc2VsZi5mb3JFYWNoKGNhbGxiYWNrLCBpdGVtcyk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gaXRlcmFibGUgP1xuICAgICAgaXRlbXNbU3ltYm9sLml0ZXJhdG9yXSgpIDpcbiAgICAgIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcbiAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB2b2lkIDAsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAoZnVuY3Rpb24gKE9iamVjdCkge1xuICAgIHZhclxuICAgICAgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgICBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgIGNyZWF0ZVNlYXJjaFBhcmFtc1BvbGx1dGUgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1Byb3RvLmFwcGVuZC5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICBuYW1lID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgIHNlYXJjaC5zZXQuY2FsbCh0aGlzLl91c3AsIG5hbWUgPyAoJz8nICsgbmFtZSkgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGVsKG5hbWUpIHtcbiAgICAgICAgICBVUkxTZWFyY2hQYXJhbXNQcm90by5kZWxldGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgICAgICBuYW1lID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICAgIHNlYXJjaC5zZXQuY2FsbCh0aGlzLl91c3AsIG5hbWUgPyAoJz8nICsgbmFtZSkgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgVVJMU2VhcmNoUGFyYW1zUHJvdG8uc2V0LmNhbGwodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgc2VhcmNoLnNldC5jYWxsKHRoaXMuX3VzcCwgbmFtZSA/ICgnPycgKyBuYW1lKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNwLCB2YWx1ZSkge1xuICAgICAgICAgIHNwLmFwcGVuZCA9IGFwcGVuZDtcbiAgICAgICAgICBzcC5kZWxldGUgPSBkZWw7XG4gICAgICAgICAgc3Auc2V0ID0gc2V0O1xuICAgICAgICAgIHJldHVybiBkUChzcCwgJ191c3AnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZVNlYXJjaFBhcmFtc0NyZWF0ZSA9IGZ1bmN0aW9uIChwb2xsdXRlU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBzcCkge1xuICAgICAgICAgIGRQKFxuICAgICAgICAgICAgb2JqLCAnX3NlYXJjaFBhcmFtcycsIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHBvbGx1dGVTZWFyY2hQYXJhbXMoc3AsIG9iailcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBzcDtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAoc3ApIHtcbiAgICAgICAgdmFyIGFwcGVuZCA9IHNwLmFwcGVuZDtcbiAgICAgICAgc3AuYXBwZW5kID0gVVJMU2VhcmNoUGFyYW1zUHJvdG8uYXBwZW5kO1xuICAgICAgICBVUkxTZWFyY2hQYXJhbXMuY2FsbChzcCwgc3AuX3VzcC5zZWFyY2guc2xpY2UoMSkpO1xuICAgICAgICBzcC5hcHBlbmQgPSBhcHBlbmQ7XG4gICAgICB9LFxuICAgICAgdmVyaWZ5U2VhcmNoUGFyYW1zID0gZnVuY3Rpb24gKG9iaiwgQ2xhc3MpIHtcbiAgICAgICAgaWYgKCEob2JqIGluc3RhbmNlb2YgQ2xhc3MpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiJ3NlYXJjaFBhcmFtcycgYWNjZXNzZWQgb24gYW4gb2JqZWN0IHRoYXQgXCIgK1xuICAgICAgICAgIFwiZG9lcyBub3QgaW1wbGVtZW50IGludGVyZmFjZSBcIiArIENsYXNzLm5hbWVcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB1cGdyYWRlQ2xhc3MgPSBmdW5jdGlvbiAoQ2xhc3MpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgQ2xhc3NQcm90byA9IENsYXNzLnByb3RvdHlwZSxcbiAgICAgICAgICBzZWFyY2hQYXJhbXMgPSBnT1BEKENsYXNzUHJvdG8sICdzZWFyY2hQYXJhbXMnKSxcbiAgICAgICAgICBocmVmID0gZ09QRChDbGFzc1Byb3RvLCAnaHJlZicpLFxuICAgICAgICAgIHNlYXJjaCA9IGdPUEQoQ2xhc3NQcm90bywgJ3NlYXJjaCcpLFxuICAgICAgICAgIGNyZWF0ZVNlYXJjaFBhcmFtc1xuICAgICAgICA7XG4gICAgICAgIGlmICghc2VhcmNoUGFyYW1zICYmIHNlYXJjaCAmJiBzZWFyY2guc2V0KSB7XG4gICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zQ3JlYXRlKFxuICAgICAgICAgICAgY3JlYXRlU2VhcmNoUGFyYW1zUG9sbHV0ZShzZWFyY2gpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICAgICAgICAgIENsYXNzUHJvdG8sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhyZWY6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBocmVmLmdldC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzcCA9IHRoaXMuX3NlYXJjaFBhcmFtcztcbiAgICAgICAgICAgICAgICAgIGhyZWYuc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgaWYgKHNwKSB1cGRhdGVTZWFyY2hQYXJhbXMoc3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoLmdldC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzcCA9IHRoaXMuX3NlYXJjaFBhcmFtcztcbiAgICAgICAgICAgICAgICAgIHNlYXJjaC5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBpZiAoc3ApIHVwZGF0ZVNlYXJjaFBhcmFtcyhzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZWFyY2hQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZlcmlmeVNlYXJjaFBhcmFtcyh0aGlzLCBDbGFzcyk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoUGFyYW1zIHx8IGNyZWF0ZVNlYXJjaFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLnNlYXJjaC5zbGljZSgxKSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzcCkge1xuICAgICAgICAgICAgICAgICAgdmVyaWZ5U2VhcmNoUGFyYW1zKHRoaXMsIENsYXNzKTtcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVNlYXJjaFBhcmFtcyh0aGlzLCBzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDtcbiAgICB0cnkge1xuICAgICAgdXBncmFkZUNsYXNzKEhUTUxBbmNob3JFbGVtZW50KTtcbiAgICAgIGlmICgvXmZ1bmN0aW9ufG9iamVjdCQvLnRlc3QodHlwZW9mIFVSTCkgJiYgVVJMLnByb3RvdHlwZSlcbiAgICAgICAgdXBncmFkZUNsYXNzKFVSTCk7XG4gICAgfSBjYXRjaCAobWVoKSB7fVxuICB9KE9iamVjdCkpO1xuXG59KHNlbGYuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZSwgT2JqZWN0KSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHNlbGYuVVJMU2VhcmNoUGFyYW1zKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBUZW1wbGF0ZUFubm90YXRpb25zLCBFZGl0b3JDb250ZXh0SGVscGVyLCBMb2dnZXJTZXJ2aWNlLCBQZXJzb25hbGl6YXRpb25TZXJ2aWNlICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NlcnZpY2UgKi8gXCIuL3NyYy9zZXJ2aWNlL2luZGV4LmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiVGVtcGxhdGVBbm5vdGF0aW9uc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJUZW1wbGF0ZUFubm90YXRpb25zXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRWRpdG9yQ29udGV4dEhlbHBlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJFZGl0b3JDb250ZXh0SGVscGVyXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTG9nZ2VyU2VydmljZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJMb2dnZXJTZXJ2aWNlXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUGVyc29uYWxpemF0aW9uU2VydmljZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJQZXJzb25hbGl6YXRpb25TZXJ2aWNlXCJdOyB9KTtcblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvRWRpdG9yQ29udGV4dEhlbHBlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2VydmljZS9FZGl0b3JDb250ZXh0SGVscGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBpbklmcmFtZSwgaW5FZGl0b3IsIGluRWRpdG9yUHJldmlldywgcmVmcmVzaCwgb25GcmFtZVJlYWR5LCBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImluSWZyYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5JZnJhbWU7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImluRWRpdG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5FZGl0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImluRWRpdG9yUHJldmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGluRWRpdG9yUHJldmlldzsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicmVmcmVzaFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlZnJlc2g7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIm9uRnJhbWVSZWFkeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIG9uRnJhbWVSZWFkeTsgfSk7XG52YXIgaW5JZnJhbWUgPSBmdW5jdGlvbiBpbklmcmFtZSgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIEJvb2xlYW4od2luZG93LmxvY2F0aW9uICE9PSB3aW5kb3cucGFyZW50LmxvY2F0aW9uKTtcbn07XG52YXIgaW5FZGl0b3IgPSBmdW5jdGlvbiBpbkVkaXRvcigpIHtcbiAgcmV0dXJuIGluSWZyYW1lKCkgJiYgIXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ21nbmxQcmV2aWV3PXRydWUnKSAmJiAhd2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbWdubFByZXZpZXdBc1Zpc2l0b3I9dHJ1ZScpO1xufTtcbnZhciBpbkVkaXRvclByZXZpZXcgPSBmdW5jdGlvbiBpbkVkaXRvclByZXZpZXcoKSB7XG4gIHJldHVybiBpbklmcmFtZSgpICYmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdtZ25sUHJldmlldz10cnVlJykgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbWdubFByZXZpZXdBc1Zpc2l0b3I9dHJ1ZScpKTtcbn07XG52YXIgcmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gIGlmIChpbkVkaXRvcigpICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwuaW5kZXhPZignPCEtLWNtczpwYWdlJykgPiAtMSkge1xuICAgIGlmICh3aW5kb3cubWdubFJlZnJlc2gpIHtcbiAgICAgIHdpbmRvdy5tZ25sUmVmcmVzaCgpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LnBhcmVudC5tZ25sUmVmcmVzaCkge1xuICAgICAgd2luZG93LnBhcmVudC5tZ25sUmVmcmVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHJlZnJlc2gsIDIwMCk7XG4gICAgfVxuICB9XG59O1xudmFyIG9uRnJhbWVSZWFkeSA9IGZ1bmN0aW9uIG9uRnJhbWVSZWFkeSgpIHtcbiAgaWYgKGluSWZyYW1lKCkpIHtcbiAgICBpZiAod2luZG93Lm1nbmxGcmFtZVJlYWR5KSB7XG4gICAgICB3aW5kb3cubWdubEZyYW1lUmVhZHkoKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQubWdubEZyYW1lUmVhZHkpIHtcbiAgICAgIHdpbmRvdy5wYXJlbnQubWdubEZyYW1lUmVhZHkoKTtcbiAgICB9XG4gIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHtcbiAgaW5JZnJhbWU6IGluSWZyYW1lLFxuICBpbkVkaXRvcjogaW5FZGl0b3IsXG4gIHJlZnJlc2g6IHJlZnJlc2gsXG4gIGluRWRpdG9yUHJldmlldzogaW5FZGl0b3JQcmV2aWV3LFxuICBvbkZyYW1lUmVhZHk6IG9uRnJhbWVSZWFkeVxufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvTG9nZ2VyU2VydmljZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2VydmljZS9Mb2dnZXJTZXJ2aWNlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBsb2csIGluZm8sIHdhcm4sIGVycm9yLCBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImxvZ1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxvZzsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiaW5mb1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGluZm87IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIndhcm5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiB3YXJuOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJlcnJvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGVycm9yOyB9KTtcbmZ1bmN0aW9uIGV4ZWMoKSB7XG4gIHZhciBmbk5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdsb2cnO1xuICB2YXIgbWVzc2FnZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvcHRpb25hbFBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb3B0aW9uYWxQYXJhbXNbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgY29uc29sZVtmbk5hbWVdKG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcbn1cblxudmFyIGxvZyA9IGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgb3B0aW9uYWxQYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG9wdGlvbmFsUGFyYW1zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgZXhlYygnbG9nJywgbWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xufTtcbnZhciBpbmZvID0gZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgb3B0aW9uYWxQYXJhbXMgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIG9wdGlvbmFsUGFyYW1zW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgZXhlYygnaW5mbycsIG1lc3NhZ2UsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG52YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIG9wdGlvbmFsUGFyYW1zID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBvcHRpb25hbFBhcmFtc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIGV4ZWMoJ3dhcm4nLCBtZXNzYWdlLCBvcHRpb25hbFBhcmFtcyk7XG59O1xudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIG9wdGlvbmFsUGFyYW1zID0gbmV3IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBvcHRpb25hbFBhcmFtc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGV4ZWMoJ2Vycm9yJywgbWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICBsb2c6IGxvZyxcbiAgaW5mbzogaW5mbyxcbiAgd2Fybjogd2FybixcbiAgZXJyb3I6IGVycm9yXG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2VydmljZS9QZXJzb25hbGl6YXRpb25TZXJ2aWNlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zZXJ2aWNlL1BlcnNvbmFsaXphdGlvblNlcnZpY2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGdldFNlbGVjdGVkVmFyaWFudCwgaXNQcmV2aWV3QXNWaXNpdG9yLCBnZXRQZXJzb25hbGl6YXRpb25QYXJhbXMsIHRvU2VhcmNoUXVlcnksIGdldFZhcmlhbnQsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0U2VsZWN0ZWRWYXJpYW50XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZ2V0U2VsZWN0ZWRWYXJpYW50OyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJpc1ByZXZpZXdBc1Zpc2l0b3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBpc1ByZXZpZXdBc1Zpc2l0b3I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFBlcnNvbmFsaXphdGlvblBhcmFtc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGdldFBlcnNvbmFsaXphdGlvblBhcmFtczsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwidG9TZWFyY2hRdWVyeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRvU2VhcmNoUXVlcnk7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImdldFZhcmlhbnRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRWYXJpYW50OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfRWRpdG9yQ29udGV4dEhlbHBlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9FZGl0b3JDb250ZXh0SGVscGVyICovIFwiLi9zcmMvc2VydmljZS9FZGl0b3JDb250ZXh0SGVscGVyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF91bmdhcF91cmxfc2VhcmNoX3BhcmFtc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zICovIFwiLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2VzbS9pbmRleC5qc1wiKTtcblxuXG5cbmZ1bmN0aW9uIGVuY29kZVZhbHVlKHZhbCkge1xuICBpZiAodHlwZW9mIGVuY29kZVVSSUNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVWYWx1ZSh2YWwpIHtcbiAgaWYgKHR5cGVvZiBkZWNvZGVVUklDb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcbn1cblxudmFyIGdldFNlbGVjdGVkVmFyaWFudCA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkVmFyaWFudChjb250ZW50LCB0ZW1wbGF0ZUFubm90YXRpb25zKSB7XG4gIGlmICghY29udGVudCB8fCAhdGVtcGxhdGVBbm5vdGF0aW9ucykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgdmFyIGFubm90YXRpb25zID0gdGVtcGxhdGVBbm5vdGF0aW9uc1tjb250ZW50WydAcGF0aCddXTtcbiAgdmFyIG1hdGNoID0gYW5ub3RhdGlvbnMubWF0Y2goL3NlbGVjdGVkVmFyaWFudD1cIiguKylcIi8pO1xuICB2YXIgdmFyaWFudCA9IG1hdGNoWzFdO1xuICByZXR1cm4gdmFyaWFudCA9PT0gY29udGVudFsnQG5hbWUnXSA/IGNvbnRlbnQgOiBjb250ZW50W3ZhcmlhbnRdO1xufTtcbnZhciBpc1ByZXZpZXdBc1Zpc2l0b3IgPSBmdW5jdGlvbiBpc1ByZXZpZXdBc1Zpc2l0b3Ioc2VhcmNoUXVlcnkpIHtcbiAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBfdW5nYXBfdXJsX3NlYXJjaF9wYXJhbXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oc2VhcmNoUXVlcnkpO1xuICByZXR1cm4gc2VhcmNoUGFyYW1zLmdldCgnbWdubFByZXZpZXdBc1Zpc2l0b3InKTtcbn07XG52YXIgZ2V0UGVyc29uYWxpemF0aW9uUGFyYW1zID0gZnVuY3Rpb24gZ2V0UGVyc29uYWxpemF0aW9uUGFyYW1zKHNlYXJjaFF1ZXJ5KSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBpZiAoIV9FZGl0b3JDb250ZXh0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLmluSWZyYW1lKCkpIHtcbiAgICAvLyBOb3QgaW4gUGFnZSBFZGl0b3JcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBfdW5nYXBfdXJsX3NlYXJjaF9wYXJhbXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oc2VhcmNoUXVlcnkpO1xuICB2YXIgaXRlciA9IHNlYXJjaFBhcmFtcy5lbnRyaWVzKCk7XG4gIHZhciByZXN1bHQgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdC52YWx1ZVswXTtcbiAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWVbMV07XG5cbiAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ3ByZXZpZXcnKSkge1xuICAgICAgcGFyYW1zW2tleV0gPSBkZWNvZGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gaXRlci5uZXh0KCk7XG4gIH1cblxuICBpZiAoaXNQcmV2aWV3QXNWaXNpdG9yKHNlYXJjaFF1ZXJ5KSkge1xuICAgIHBhcmFtcy5tZ25sUHJldmlld0FzVmlzaXRvciA9ICd0cnVlJztcbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMudmFyaWFudHMgPSAnYWxsJztcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xudmFyIHRvU2VhcmNoUXVlcnkgPSBmdW5jdGlvbiB0b1NlYXJjaFF1ZXJ5KHBhcmFtcykge1xuICB2YXIgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGtleSwgXCI9XCIpLmNvbmNhdChlbmNvZGVWYWx1ZShwYXJhbXNba2V5XSkpO1xuICB9KS5qb2luKCcmJyk7XG4gIHJldHVybiBxdWVyeVN0cmluZyA/IFwiP1wiLmNvbmNhdChxdWVyeVN0cmluZykgOiAnJztcbn07XG52YXIgZ2V0VmFyaWFudCA9IGZ1bmN0aW9uIGdldFZhcmlhbnQoY29udGVudCwgdGVtcGxhdGVBbm5vdGF0aW9ucykge1xuICBpZiAoIV9FZGl0b3JDb250ZXh0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLmluRWRpdG9yKCkpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmIChjb250ZW50ICYmIGNvbnRlbnRbJ2pjcjptaXhpblR5cGVzJ10gJiYgY29udGVudFsnamNyOm1peGluVHlwZXMnXS5pbmNsdWRlcygnbWdubDpoYXNWYXJpYW50JykpIHtcbiAgICByZXR1cm4gZ2V0U2VsZWN0ZWRWYXJpYW50KGNvbnRlbnQsIHRlbXBsYXRlQW5ub3RhdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gIGlzUHJldmlld0FzVmlzaXRvcjogaXNQcmV2aWV3QXNWaXNpdG9yLFxuICBnZXRQZXJzb25hbGl6YXRpb25QYXJhbXM6IGdldFBlcnNvbmFsaXphdGlvblBhcmFtcyxcbiAgdG9TZWFyY2hRdWVyeTogdG9TZWFyY2hRdWVyeSxcbiAgZ2V0VmFyaWFudDogZ2V0VmFyaWFudFxufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvVGVtcGxhdGVBbm5vdGF0aW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2VydmljZS9UZW1wbGF0ZUFubm90YXRpb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBnZXRQYWdlQ29tbWVudFN0cmluZywgZ2V0QXJlYUNvbW1lbnRTdHJpbmcsIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmcsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0UGFnZUNvbW1lbnRTdHJpbmdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRQYWdlQ29tbWVudFN0cmluZzsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0QXJlYUNvbW1lbnRTdHJpbmdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBnZXRBcmVhQ29tbWVudFN0cmluZzsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZ1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmc7IH0pO1xuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbnZhciBBQ1RJVkFUSU9OX1NUQVRVU19OT1RfQUNUSVZBVEVEID0gMDtcbnZhciBBQ1RJVkFUSU9OX1NUQVRVU19NT0RJRklFRCA9IDE7XG52YXIgQUNUSVZBVElPTl9TVEFUVVNfQUNUSVZBVEVEID0gMjtcbnZhciBWQUxVRV9QUk9DRVNTT1JTID0ge1xuICBjb250ZW50OiBnZXRDb250ZW50UGF0aCxcbiAgYXZhaWxhYmxlQ29tcG9uZW50czogZ2V0QXZhaWxhYmxlQ29tcG9uZW50cyxcbiAgc2hvd0FkZEJ1dHRvbjogY2FuQWRkTW9yZUNvbXBvbmVudHMsXG4gIGFjdGl2YXRpb25TdGF0dXM6IGdldEFjdGl2YXRpb25TdGF0dXNcbn07XG52YXIgUEFHRV9NQVAgPSB7XG4gIGNvbnRlbnQ6IFsnQHBhdGgnLCAnJ10sXG4gIGRpYWxvZzogWydkaWFsb2cnLCAnJywgZ2V0VmFsdWVGcm9tT2JqZWN0XVxufTtcbnZhciBBUkVBX01BUCA9IHtcbiAgbmFtZTogWydAbmFtZScsICcnXSxcbiAgY29udGVudDogUEFHRV9NQVAuY29udGVudCxcbiAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gIGF2YWlsYWJsZUNvbXBvbmVudHM6IFsnYXZhaWxhYmxlQ29tcG9uZW50cycsIFtdXSxcbiAgdHlwZTogWyd0eXBlJywgJ2xpc3QnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBsYWJlbDogWyd0aXRsZScsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBpbmhlcml0OiBbJ2luaGVyaXRhbmNlJywgZmFsc2UsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gIG9wdGlvbmFsOiBbJ29wdGlvbmFsJywgZmFsc2UsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gIGNyZWF0ZWRBcmVhTm9kZTogWydjcmVhdGVBcmVhTm9kZScsIHRydWUsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gIHNob3dBZGRCdXR0b246IFsnbWF4Q29tcG9uZW50cycsIHRydWVdLFxuICBzaG93TmV3Q29tcG9uZW50QXJlYTogW251bGwsIHRydWVdLFxuICBkZXNjcmlwdGlvbjogWydkZXNjcmlwdGlvbicsICcnLCBnZXRWYWx1ZUZyb21PYmplY3RdLFxuICBhY3RpdmF0aW9uU3RhdHVzOiBbbnVsbCwgMF1cbn07XG52YXIgQ09NUE9ORU5UX01BUCA9IHtcbiAgY29udGVudDogUEFHRV9NQVAuY29udGVudCxcbiAgZGlhbG9nOiBQQUdFX01BUC5kaWFsb2csXG4gIGxhYmVsOiBbJ3RpdGxlJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gIGRlc2NyaXB0aW9uOiBbJ2Rlc2NyaXB0aW9uJywgJycsIGdldFZhbHVlRnJvbU9iamVjdF0sXG4gIGFjdGl2YXRpb25TdGF0dXM6IFtudWxsLCAwXVxufTtcblxuZnVuY3Rpb24gZ2V0Q29tbWVudFN0cmluZyhkYXRhLCBtYXAsIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgX21hcCRrZXkgPSBfc2xpY2VkVG9BcnJheShtYXBba2V5XSwgMyksXG4gICAgICAgIGRhdGFLZXkgPSBfbWFwJGtleVswXSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gX21hcCRrZXlbMV0sXG4gICAgICAgIGdldERhdGFGbiA9IF9tYXAka2V5WzJdO1xuXG4gICAgdmFyIGNvbnRlbnRQcm9jZXNzb3IgPSBWQUxVRV9QUk9DRVNTT1JTW2tleV07XG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKGNvbnRlbnRQcm9jZXNzb3IpIHtcbiAgICAgIHZhbHVlID0gY29udGVudFByb2Nlc3NvcihkYXRhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24sIGN1c3RvbVBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChnZXREYXRhRm4pIHtcbiAgICAgIHZhbHVlID0gZ2V0RGF0YUZuKHRlbXBsYXRlRGVmaW5pdGlvbiwgZGF0YUtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhS2V5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGRhdGFbZGF0YUtleV0gfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0udmFsdWUgIT09ICdzdHJpbmcnIHx8IGl0ZW0udmFsdWUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFwiXCIuY29uY2F0KGtleSwgXCI9XFxcIlwiKS5jb25jYXQoaXRlbS52YWx1ZSwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlQ29tcG9uZW50cyhhcmVhLCBkYXRhS2V5LCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgaWYgKCF0ZW1wbGF0ZURlZmluaXRpb24gfHwgIXRlbXBsYXRlRGVmaW5pdGlvbltkYXRhS2V5XSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0ZW1wbGF0ZURlZmluaXRpb25bZGF0YUtleV0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlRGVmaW5pdGlvbltkYXRhS2V5XVtrZXldLmlkO1xuICB9KS5qb2luKCcsJyk7XG59XG5cbmZ1bmN0aW9uIGNhbkFkZE1vcmVDb21wb25lbnRzKGFyZWEsIGRhdGFLZXksIHRlbXBsYXRlRGVmaW5pdGlvbiwgY3VzdG9tUGFyYW1zKSB7XG4gIGlmICghdGVtcGxhdGVEZWZpbml0aW9uIHx8IHRlbXBsYXRlRGVmaW5pdGlvbi5tYXhDb21wb25lbnRzID09IG51bGwgfHwgIWN1c3RvbVBhcmFtcyB8fCBjdXN0b21QYXJhbXMuY29tcG9uZW50Q291bnQgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbVBhcmFtcy5jb21wb25lbnRDb3VudCA8IHRlbXBsYXRlRGVmaW5pdGlvbi5tYXhDb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSBvYmogJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiBrZXkgPyBvYmpba2V5XSA6IG51bGw7XG4gIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuICB2YWx1ZSA9IHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdib29sZWFuJyA/IEJvb2xlYW4odmFsdWUpIDogdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRlbnRQYXRoKGRhdGEsIGtleSkge1xuICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVtrZXldIDogbnVsbDsgLy8gTk9URTogRW1wdHkgc3RyaW5nIGlzIGFjY2VwdGFibGUuIFNvIHdlIG5lZWQgY2hlY2sgdmFsdWUgIT0gbnVsbFxuXG4gIHJldHVybiB2YWx1ZSAhPSBudWxsID8gXCJ3ZWJzaXRlOlwiLmNvbmNhdCh2YWx1ZSkgOiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZhdGlvblN0YXR1cyhkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gfHwgZGF0YVsnbWdubDphY3RpdmF0aW9uU3RhdHVzJ10gPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gQUNUSVZBVElPTl9TVEFUVVNfTk9UX0FDVElWQVRFRDtcbiAgfVxuXG4gIHZhciBsYXN0TW9kaWZpZWQgPSBkYXRhWydtZ25sOmxhc3RNb2RpZmllZCddID8gbmV3IERhdGUoZGF0YVsnbWdubDpsYXN0TW9kaWZpZWQnXSkgOiBudWxsO1xuICB2YXIgbGFzdEFjdGl2YXRlZCA9IGRhdGFbJ21nbmw6bGFzdEFjdGl2YXRlZCddID8gbmV3IERhdGUoZGF0YVsnbWdubDpsYXN0QWN0aXZhdGVkJ10pIDogbnVsbDtcbiAgcmV0dXJuIGxhc3RNb2RpZmllZCAmJiBsYXN0QWN0aXZhdGVkICYmIGxhc3RNb2RpZmllZC5nZXRUaW1lKCkgPiBsYXN0QWN0aXZhdGVkLmdldFRpbWUoKSA/IEFDVElWQVRJT05fU1RBVFVTX01PRElGSUVEIDogQUNUSVZBVElPTl9TVEFUVVNfQUNUSVZBVEVEO1xufVxuXG52YXIgZ2V0UGFnZUNvbW1lbnRTdHJpbmcgPSBmdW5jdGlvbiBnZXRQYWdlQ29tbWVudFN0cmluZyhwYWdlLCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgcmV0dXJuIFwiY21zOnBhZ2UgXCIuY29uY2F0KGdldENvbW1lbnRTdHJpbmcocGFnZSwgUEFHRV9NQVAsIHRlbXBsYXRlRGVmaW5pdGlvbikpO1xufTtcbnZhciBnZXRBcmVhQ29tbWVudFN0cmluZyA9IGZ1bmN0aW9uIGdldEFyZWFDb21tZW50U3RyaW5nKGFyZWEsIHRlbXBsYXRlRGVmaW5pdGlvbiwgY29tcG9uZW50Q291bnQpIHtcbiAgdmFyIGN1c3RvbVBhcmFtcyA9IHtcbiAgICBjb21wb25lbnRDb3VudDogY29tcG9uZW50Q291bnRcbiAgfTtcbiAgdmFyIGFyZWFUZW1wbGF0ZURlZmluaXRpb24gPSB0ZW1wbGF0ZURlZmluaXRpb24gJiYgdGVtcGxhdGVEZWZpbml0aW9uLmFyZWFzID8gdGVtcGxhdGVEZWZpbml0aW9uLmFyZWFzW2FyZWFbJ0BuYW1lJ11dIDoge307XG4gIHJldHVybiBcImNtczphcmVhIFwiLmNvbmNhdChnZXRDb21tZW50U3RyaW5nKGFyZWEsIEFSRUFfTUFQLCBhcmVhVGVtcGxhdGVEZWZpbml0aW9uLCBjdXN0b21QYXJhbXMpKTtcbn07XG52YXIgZ2V0Q29tcG9uZW50Q29tbWVudFN0cmluZyA9IGZ1bmN0aW9uIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmcoY29tcG9uZW50LCB0ZW1wbGF0ZURlZmluaXRpb24pIHtcbiAgcmV0dXJuIFwiY21zOmNvbXBvbmVudCBcIi5jb25jYXQoZ2V0Q29tbWVudFN0cmluZyhjb21wb25lbnQsIENPTVBPTkVOVF9NQVAsIHRlbXBsYXRlRGVmaW5pdGlvbikpO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICBnZXRBcmVhQ29tbWVudFN0cmluZzogZ2V0QXJlYUNvbW1lbnRTdHJpbmcsXG4gIGdldENvbXBvbmVudENvbW1lbnRTdHJpbmc6IGdldENvbXBvbmVudENvbW1lbnRTdHJpbmcsXG4gIGdldFBhZ2VDb21tZW50U3RyaW5nOiBnZXRQYWdlQ29tbWVudFN0cmluZ1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3NlcnZpY2UvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zZXJ2aWNlL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogVGVtcGxhdGVBbm5vdGF0aW9ucywgRWRpdG9yQ29udGV4dEhlbHBlciwgTG9nZ2VyU2VydmljZSwgUGVyc29uYWxpemF0aW9uU2VydmljZSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfVGVtcGxhdGVBbm5vdGF0aW9uc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9UZW1wbGF0ZUFubm90YXRpb25zICovIFwiLi9zcmMvc2VydmljZS9UZW1wbGF0ZUFubm90YXRpb25zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiVGVtcGxhdGVBbm5vdGF0aW9uc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9UZW1wbGF0ZUFubm90YXRpb25zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9FZGl0b3JDb250ZXh0SGVscGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0VkaXRvckNvbnRleHRIZWxwZXIgKi8gXCIuL3NyYy9zZXJ2aWNlL0VkaXRvckNvbnRleHRIZWxwZXIuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJFZGl0b3JDb250ZXh0SGVscGVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX0VkaXRvckNvbnRleHRIZWxwZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX0xvZ2dlclNlcnZpY2VfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyU2VydmljZSAqLyBcIi4vc3JjL3NlcnZpY2UvTG9nZ2VyU2VydmljZS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkxvZ2dlclNlcnZpY2VcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfTG9nZ2VyU2VydmljZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfUGVyc29uYWxpemF0aW9uU2VydmljZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9QZXJzb25hbGl6YXRpb25TZXJ2aWNlICovIFwiLi9zcmMvc2VydmljZS9QZXJzb25hbGl6YXRpb25TZXJ2aWNlLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUGVyc29uYWxpemF0aW9uU2VydmljZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9QZXJzb25hbGl6YXRpb25TZXJ2aWNlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2luZGV4LmpzICovXCIuL3NyYy9pbmRleC5qc1wiKTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZRSFZ1WjJGd0wzVnliQzF6WldGeVkyZ3RjR0Z5WVcxekwyVnpiUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNObGNuWnBZMlV2UldScGRHOXlRMjl1ZEdWNGRFaGxiSEJsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjMlZ5ZG1salpTOU1iMmRuWlhKVFpYSjJhV05sTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXpaWEoyYVdObEwxQmxjbk52Ym1Gc2FYcGhkR2x2YmxObGNuWnBZMlV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwzTmxjblpwWTJVdlZHVnRjR3hoZEdWQmJtNXZkR0YwYVc5dWN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzJWeWRtbGpaUzlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKcGJrbG1jbUZ0WlNJc0luZHBibVJ2ZHlJc0lrSnZiMnhsWVc0aUxDSnNiMk5oZEdsdmJpSXNJbkJoY21WdWRDSXNJbWx1UldScGRHOXlJaXdpYzJWaGNtTm9JaXdpYVc1amJIVmtaWE1pTENKcGJrVmthWFJ2Y2xCeVpYWnBaWGNpTENKeVpXWnlaWE5vSWl3aVpHOWpkVzFsYm5RaUxDSmtiMk4xYldWdWRFVnNaVzFsYm5RaUxDSnBibTVsY2toVVRVd2lMQ0pwYm1SbGVFOW1JaXdpYldkdWJGSmxabkpsYzJnaUxDSnpaWFJVYVcxbGIzVjBJaXdpYjI1R2NtRnRaVkpsWVdSNUlpd2liV2R1YkVaeVlXMWxVbVZoWkhraUxDSmxlR1ZqSWl3aVptNU9ZVzFsSWl3aWJXVnpjMkZuWlNJc0ltTnZibk52YkdVaUxDSnZjSFJwYjI1aGJGQmhjbUZ0Y3lJc0lteHZaeUlzSW1sdVptOGlMQ0ozWVhKdUlpd2laWEp5YjNJaUxDSmxibU52WkdWV1lXeDFaU0lzSW5aaGJDSXNJbVZ1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ0lzSW1SbFkyOWtaVlpoYkhWbElpd2laR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBJaXdpWjJWMFUyVnNaV04wWldSV1lYSnBZVzUwSWl3aVkyOXVkR1Z1ZENJc0luUmxiWEJzWVhSbFFXNXViM1JoZEdsdmJuTWlMQ0poYm01dmRHRjBhVzl1Y3lJc0ltMWhkR05vSWl3aWRtRnlhV0Z1ZENJc0ltbHpVSEpsZG1sbGQwRnpWbWx6YVhSdmNpSXNJbk5sWVhKamFGRjFaWEo1SWl3aWMyVmhjbU5vVUdGeVlXMXpJaXdpVlZKTVUyVmhjbU5vVUdGeVlXMXpJaXdpWjJWMElpd2laMlYwVUdWeWMyOXVZV3hwZW1GMGFXOXVVR0Z5WVcxeklpd2ljR0Z5WVcxeklpd2lSV1JwZEc5eVEyOXVkR1Y0ZEVobGJIQmxjaUlzSW1sMFpYSWlMQ0psYm5SeWFXVnpJaXdpY21WemRXeDBJaXdpYm1WNGRDSXNJbVJ2Ym1VaUxDSnJaWGtpTENKMllXeDFaU0lzSW5OMFlYSjBjMWRwZEdnaUxDSnRaMjVzVUhKbGRtbGxkMEZ6Vm1semFYUnZjaUlzSW5aaGNtbGhiblJ6SWl3aWRHOVRaV0Z5WTJoUmRXVnllU0lzSW5GMVpYSjVVM1J5YVc1bklpd2lUMkpxWldOMElpd2lhMlY1Y3lJc0ltMWhjQ0lzSW1wdmFXNGlMQ0puWlhSV1lYSnBZVzUwSWl3aVFVTlVTVlpCVkVsUFRsOVRWRUZVVlZOZlRrOVVYMEZEVkVsV1FWUkZSQ0lzSWtGRFZFbFdRVlJKVDA1ZlUxUkJWRlZUWDAxUFJFbEdTVVZFSWl3aVFVTlVTVlpCVkVsUFRsOVRWRUZVVlZOZlFVTlVTVlpCVkVWRUlpd2lWa0ZNVlVWZlVGSlBRMFZUVTA5U1V5SXNJbWRsZEVOdmJuUmxiblJRWVhSb0lpd2lZWFpoYVd4aFlteGxRMjl0Y0c5dVpXNTBjeUlzSW1kbGRFRjJZV2xzWVdKc1pVTnZiWEJ2Ym1WdWRITWlMQ0p6YUc5M1FXUmtRblYwZEc5dUlpd2lZMkZ1UVdSa1RXOXlaVU52YlhCdmJtVnVkSE1pTENKaFkzUnBkbUYwYVc5dVUzUmhkSFZ6SWl3aVoyVjBRV04wYVhaaGRHbHZibE4wWVhSMWN5SXNJbEJCUjBWZlRVRlFJaXdpWkdsaGJHOW5JaXdpWjJWMFZtRnNkV1ZHY205dFQySnFaV04wSWl3aVFWSkZRVjlOUVZBaUxDSnVZVzFsSWl3aWRIbHdaU0lzSW14aFltVnNJaXdpYVc1b1pYSnBkQ0lzSW05d2RHbHZibUZzSWl3aVkzSmxZWFJsWkVGeVpXRk9iMlJsSWl3aWMyaHZkMDVsZDBOdmJYQnZibVZ1ZEVGeVpXRWlMQ0prWlhOamNtbHdkR2x2YmlJc0lrTlBUVkJQVGtWT1ZGOU5RVkFpTENKblpYUkRiMjF0Wlc1MFUzUnlhVzVuSWl3aVpHRjBZU0lzSW5SbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlJc0ltTjFjM1J2YlZCaGNtRnRjeUlzSW1admNrVmhZMmdpTENKa1lYUmhTMlY1SWl3aVpHVm1ZWFZzZEZaaGJIVmxJaXdpWjJWMFJHRjBZVVp1SWl3aVkyOXVkR1Z1ZEZCeWIyTmxjM052Y2lJc0ltbDBaVzBpTENKd2RYTm9JaXdpWVhKbFlTSXNJbWxrSWl3aWJXRjRRMjl0Y0c5dVpXNTBjeUlzSW1OdmJYQnZibVZ1ZEVOdmRXNTBJaXdpYjJKcUlpd2liR0Z6ZEUxdlpHbG1hV1ZrSWl3aVJHRjBaU0lzSW14aGMzUkJZM1JwZG1GMFpXUWlMQ0puWlhSVWFXMWxJaXdpWjJWMFVHRm5aVU52YlcxbGJuUlRkSEpwYm1jaUxDSndZV2RsSWl3aVoyVjBRWEpsWVVOdmJXMWxiblJUZEhKcGJtY2lMQ0poY21WaFZHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUlpd2lZWEpsWVhNaUxDSm5aWFJEYjIxd2IyNWxiblJEYjIxdFpXNTBVM1J5YVc1bklpd2lZMjl0Y0c5dVpXNTBJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0UlExWkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERKQ1FVRXlRaXhSUVVGUk8wRkJRMjVETzBGQlEwRTdRVUZEUVN3eVFrRkJNa0lzVVVGQlVUdEJRVU51UXl3eVFrRkJNa0lzVTBGQlV6dEJRVU53UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGdzUTBGQlF6dEJRVU5FTEhWRFFVRjFRenRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVN3eVEwRkJNa01zUlVGQlJUdEJRVU0zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFpDUVVFMlFqdEJRVU0zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNjME5CUVhORExGbEJRVms3UVVGRGJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clEwRkJhME1zV1VGQldUdEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdERRVUZyUXl4WlFVRlpPMEZCUXpsRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdPMEZCUlVFN1FVRkRRU3hQUVVGUExEaENRVUU0UWl4RlFVRkZPenRCUVVWMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFN1FVRkRZaXhYUVVGWE8wRkJRMWc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQmEwUXNaMEpCUVdkQ0xFVkJRVVU3UVVGRGNFVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCYTBRc2EwSkJRV3RDTEVWQlFVVTdRVUZEZEVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJhMFFzZVVKQlFYbENMRVZCUVVVN1FVRkROMFU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4cFFrRkJhVUk3UVVGRGJFTTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeHBRa0ZCYVVJN1FVRkRiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUWtGQmEwSTdRVUZEYkVJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhPMEZCUTFnN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENPMEZCUTJwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4bFFVRmxPMEZCUTJZN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENPMEZCUTJwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4bFFVRmxPMEZCUTJZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUk3UVVGRGFrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFRDeEhRVUZIT3p0QlFVVklMRU5CUVVNN1FVRkRZeXh0UmtGQmIwSXNSVUZCUXpzN096czdPenM3T3pzN096dEJRM1pZY0VNN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPenM3T3pzN096czdRVU5EUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlR5eEpRVUZOUVN4UlFVRlJMRWRCUVVjc1UwRkJXRUVzVVVGQlZ5eEhRVUZOTzBGQlF6VkNMRTFCUVVrc1QwRkJUME1zVFVGQlVDeExRVUZyUWl4WFFVRjBRaXhGUVVGdFF6dEJRVU5xUXl4WFFVRlBMRXRCUVZBN1FVRkRSRHM3UVVGRFJDeFRRVUZQUXl4UFFVRlBMRU5CUVVORUxFMUJRVTBzUTBGQlEwVXNVVUZCVUN4TFFVRnZRa1lzVFVGQlRTeERRVUZEUnl4TlFVRlFMRU5CUVdORUxGRkJRVzVETEVOQlFXUTdRVUZEUkN4RFFVeE5PMEZCVDBFc1NVRkJUVVVzVVVGQlVTeEhRVUZITEZOQlFWaEJMRkZCUVZjc1IwRkJUVHRCUVVNMVFpeFRRVUZQVEN4UlFVRlJMRTFCUVUwc1EwRkJRME1zVFVGQlRTeERRVUZEUlN4UlFVRlFMRU5CUVdkQ1J5eE5RVUZvUWl4RFFVRjFRa01zVVVGQmRrSXNRMEZCWjBNc2EwSkJRV2hETEVOQlFXWXNTVUZCYzBVc1EwRkJRMDRzVFVGQlRTeERRVUZEUlN4UlFVRlFMRU5CUVdkQ1J5eE5RVUZvUWl4RFFVRjFRa01zVVVGQmRrSXNRMEZCWjBNc01rSkJRV2hETEVOQlFUbEZPMEZCUTBRc1EwRkdUVHRCUVVsQkxFbEJRVTFETEdWQlFXVXNSMEZCUnl4VFFVRnNRa0VzWlVGQmEwSXNSMEZCVFR0QlFVTnVReXhUUVVGUFVpeFJRVUZSTEU5QlFVOURMRTFCUVUwc1EwRkJRMFVzVVVGQlVDeERRVUZuUWtjc1RVRkJhRUlzUTBGQmRVSkRMRkZCUVhaQ0xFTkJRV2RETEd0Q1FVRm9ReXhMUVVGMVJFNHNUVUZCVFN4RFFVRkRSU3hSUVVGUUxFTkJRV2RDUnl4TlFVRm9RaXhEUVVGMVFrTXNVVUZCZGtJc1EwRkJaME1zTWtKQlFXaERMRU5CUVRsRUxFTkJRV1k3UVVGRFJDeERRVVpOTzBGQlNVRXNTVUZCVFVVc1QwRkJUeXhIUVVGSExGTkJRVlpCTEU5QlFWVXNSMEZCVFR0QlFVTXpRaXhOUVVGSlNpeFJRVUZSTEUxQlFVMUxMRkZCUVZFc1EwRkJRME1zWlVGQlZDeERRVUY1UWtNc1UwRkJla0lzUTBGQmJVTkRMRTlCUVc1RExFTkJRVEpETEdOQlFUTkRMRWxCUVRaRUxFTkJRVU1zUTBGQmFFWXNSVUZCYlVZN1FVRkRha1lzVVVGQlNWb3NUVUZCVFN4RFFVRkRZU3hYUVVGWUxFVkJRWGRDTzBGQlEzUkNZaXhaUVVGTkxFTkJRVU5oTEZkQlFWQTdRVUZEUkN4TFFVWkVMRTFCUlU4c1NVRkJTV0lzVFVGQlRTeERRVUZEUnl4TlFVRlFMRU5CUVdOVkxGZEJRV3hDTEVWQlFTdENPMEZCUTNCRFlpeFpRVUZOTEVOQlFVTkhMRTFCUVZBc1EwRkJZMVVzVjBGQlpEdEJRVU5FTEV0QlJrMHNUVUZGUVR0QlFVTk1ReXhuUWtGQlZTeERRVUZEVGl4UFFVRkVMRVZCUVZVc1IwRkJWaXhEUVVGV08wRkJRMFE3UVVGRFJqdEJRVU5HTEVOQlZrMDdRVUZaUVN4SlFVRk5UeXhaUVVGWkxFZEJRVWNzVTBGQlprRXNXVUZCWlN4SFFVRk5PMEZCUTJoRExFMUJRVWxvUWl4UlFVRlJMRVZCUVZvc1JVRkJaMEk3UVVGRFpDeFJRVUZKUXl4TlFVRk5MRU5CUVVOblFpeGpRVUZZTEVWQlFUSkNPMEZCUTNwQ2FFSXNXVUZCVFN4RFFVRkRaMElzWTBGQlVEdEJRVU5FTEV0QlJrUXNUVUZGVHl4SlFVRkphRUlzVFVGQlRTeERRVUZEUnl4TlFVRlFMRU5CUVdOaExHTkJRV3hDTEVWQlFXdERPMEZCUTNaRGFFSXNXVUZCVFN4RFFVRkRSeXhOUVVGUUxFTkJRV05oTEdOQlFXUTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRlNUVHRCUVZWUk8wRkJRMkpxUWl4VlFVRlJMRVZCUVZKQkxGRkJSR0U3UVVGRllrc3NWVUZCVVN4RlFVRlNRU3hSUVVaaE8wRkJSMkpKTEZOQlFVOHNSVUZCVUVFc1QwRklZVHRCUVVsaVJDeHBRa0ZCWlN4RlFVRm1RU3hsUVVwaE8wRkJTMkpSTEdOQlFWa3NSVUZCV2tFN1FVRk1ZU3hEUVVGbUxFVTdPenM3T3pzN096czdPenRCUTNKRFFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1UwRkJVMFVzU1VGQlZDeEhRVUV3UkR0QlFVRkJMRTFCUVRWRFF5eE5RVUUwUXl4MVJVRkJia01zUzBGQmJVTTdRVUZCUVN4TlFVRTFRa01zVDBGQk5FSTdPMEZCUTNoRUxFMUJRVWtzVDBGQlQwTXNUMEZCVUN4TFFVRnRRaXhYUVVGMlFpeEZRVUZ2UXp0QlFVTnNRenRCUVVORUxFZEJTSFZFTEVOQlNYaEVPenM3UVVGS2QwUXNiME5CUVdoQ1F5eGpRVUZuUWp0QlFVRm9Ra0VzYTBKQlFXZENPMEZCUVVFN08wRkJTM2hFUkN4VFFVRlBMRU5CUVVOR0xFMUJRVVFzUTBGQlVDeERRVUZuUWtNc1QwRkJhRUlzUlVGQmVVSkZMR05CUVhwQ08wRkJRMFE3TzBGQlJVMHNTVUZCVFVNc1IwRkJSeXhIUVVGSExGTkJRVTVCTEVkQlFVMHNRMEZCUTBnc1QwRkJSQ3hGUVVGblF6dEJRVUZCTEhGRFFVRnVRa1VzWTBGQmJVSTdRVUZCYmtKQkxHdENRVUZ0UWp0QlFVRkJPenRCUVVOcVJFb3NUVUZCU1N4RFFVRkRMRXRCUVVRc1JVRkJVVVVzVDBGQlVpeEZRVUZwUWtVc1kwRkJha0lzUTBGQlNqdEJRVU5FTEVOQlJrMDdRVUZKUVN4SlFVRk5SU3hKUVVGSkxFZEJRVWNzVTBGQlVFRXNTVUZCVHl4RFFVRkRTaXhQUVVGRUxFVkJRV2RETzBGQlFVRXNjVU5CUVc1Q1JTeGpRVUZ0UWp0QlFVRnVRa0VzYTBKQlFXMUNPMEZCUVVFN08wRkJRMnhFU2l4TlFVRkpMRU5CUVVNc1RVRkJSQ3hGUVVGVFJTeFBRVUZVTEVWQlFXdENSU3hqUVVGc1FpeERRVUZLTzBGQlEwUXNRMEZHVFR0QlFVbEJMRWxCUVUxSExFbEJRVWtzUjBGQlJ5eFRRVUZRUVN4SlFVRlBMRU5CUVVOTUxFOUJRVVFzUlVGQlowTTdRVUZCUVN4eFEwRkJia0pGTEdOQlFXMUNPMEZCUVc1Q1FTeHJRa0ZCYlVJN1FVRkJRVHM3UVVGRGJFUktMRTFCUVVrc1EwRkJReXhOUVVGRUxFVkJRVk5GTEU5QlFWUXNSVUZCYTBKRkxHTkJRV3hDTEVOQlFVbzdRVUZEUkN4RFFVWk5PMEZCU1VFc1NVRkJUVWtzUzBGQlN5eEhRVUZITEZOQlFWSkJMRXRCUVZFc1EwRkJRMDRzVDBGQlJDeEZRVUZuUXp0QlFVRkJMSEZEUVVGdVFrVXNZMEZCYlVJN1FVRkJia0pCTEd0Q1FVRnRRanRCUVVGQk96dEJRVU51UkVvc1RVRkJTU3hEUVVGRExFOUJRVVFzUlVGQlZVVXNUMEZCVml4RlFVRnRRa1VzWTBGQmJrSXNRMEZCU2p0QlFVTkVMRU5CUmswN1FVRkpVVHRCUVVOaVF5eExRVUZITEVWQlFVaEJMRWRCUkdFN1FVRkZZa01zVFVGQlNTeEZRVUZLUVN4SlFVWmhPMEZCUjJKRExFMUJRVWtzUlVGQlNrRXNTVUZJWVR0QlFVbGlReXhQUVVGTExFVkJRVXhCTzBGQlNtRXNRMEZCWml4Rk96czdPenM3T3pzN096czdRVU42UWtFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUTBFN08wRkJSVUVzVTBGQlUwTXNWMEZCVkN4RFFVRnhRa01zUjBGQmNrSXNSVUZCTUVJN1FVRkRlRUlzVFVGQlNTeFBRVUZQUXl4clFrRkJVQ3hMUVVFNFFpeFhRVUZzUXl4RlFVRXJRenRCUVVNM1F5eFhRVUZQUkN4SFFVRlFPMEZCUTBRN08wRkJRMFFzVTBGQlQwTXNhMEpCUVd0Q0xFTkJRVU5FTEVkQlFVUXNRMEZCZWtJN1FVRkRSRHM3UVVGRlJDeFRRVUZUUlN4WFFVRlVMRU5CUVhGQ1JpeEhRVUZ5UWl4RlFVRXdRanRCUVVONFFpeE5RVUZKTEU5QlFVOUhMR3RDUVVGUUxFdEJRVGhDTEZkQlFXeERMRVZCUVN0RE8wRkJRemRETEZkQlFVOUlMRWRCUVZBN1FVRkRSRHM3UVVGRFJDeFRRVUZQUnl4clFrRkJhMElzUTBGQlEwZ3NSMEZCUkN4RFFVRjZRanRCUVVORU96dEJRVVZOTEVsQlFVMUpMR3RDUVVGclFpeEhRVUZITEZOQlFYSkNRU3hyUWtGQmNVSXNRMEZCUTBNc1QwRkJSQ3hGUVVGVlF5eHRRa0ZCVml4RlFVRnJRenRCUVVOc1JTeE5RVUZKTEVOQlFVTkVMRTlCUVVRc1NVRkJXU3hEUVVGRFF5eHRRa0ZCYWtJc1JVRkJjME03UVVGRGNFTXNWMEZCVDBRc1QwRkJVRHRCUVVORU96dEJRVU5FTEUxQlFVMUZMRmRCUVZjc1IwRkJSMFFzYlVKQlFXMUNMRU5CUVVORUxFOUJRVThzUTBGQlF5eFBRVUZFTEVOQlFWSXNRMEZCZGtNN1FVRkRRU3hOUVVGTlJ5eExRVUZMTEVkQlFVZEVMRmRCUVZjc1EwRkJRME1zUzBGQldpeERRVUZyUWl4M1FrRkJiRUlzUTBGQlpEdEJRVU5CTEUxQlFVMURMRTlCUVU4c1IwRkJSMFFzUzBGQlN5eERRVUZETEVOQlFVUXNRMEZCY2tJN1FVRkRRU3hUUVVGUFF5eFBRVUZQTEV0QlFVdEtMRTlCUVU4c1EwRkJReXhQUVVGRUxFTkJRVzVDTEVkQlFTdENRU3hQUVVFdlFpeEhRVUY1UTBFc1QwRkJUeXhEUVVGRFNTeFBRVUZFTEVOQlFYWkVPMEZCUTBRc1EwRlNUVHRCUVZWQkxFbEJRVTFETEd0Q1FVRnJRaXhIUVVGSExGTkJRWEpDUVN4clFrRkJjVUlzUTBGQlEwTXNWMEZCUkN4RlFVRnBRanRCUVVOcVJDeE5RVUZOUXl4WlFVRlpMRWRCUVVjc1NVRkJTVU1zWjBWQlFVb3NRMEZCYjBKR0xGZEJRWEJDTEVOQlFYSkNPMEZCUTBFc1UwRkJUME1zV1VGQldTeERRVUZEUlN4SFFVRmlMRU5CUVdsQ0xITkNRVUZxUWl4RFFVRlFPMEZCUTBRc1EwRklUVHRCUVV0QkxFbEJRVTFETEhkQ1FVRjNRaXhIUVVGSExGTkJRVE5DUVN4M1FrRkJNa0lzUTBGQlEwb3NWMEZCUkN4RlFVRnBRanRCUVVOMlJDeE5RVUZOU3l4TlFVRk5MRWRCUVVjc1JVRkJaanM3UVVGRFFTeE5RVUZKTEVOQlFVTkRMRFJFUVVGdFFpeERRVUZETjBNc1VVRkJjRUlzUlVGQlRDeEZRVUZ4UXp0QlFVTnVRenRCUVVOQkxGZEJRVTgwUXl4TlFVRlFPMEZCUTBRN08wRkJRMFFzVFVGQlRVb3NXVUZCV1N4SFFVRkhMRWxCUVVsRExHZEZRVUZLTEVOQlFXOUNSaXhYUVVGd1FpeERRVUZ5UWp0QlFVTkJMRTFCUVUxUExFbEJRVWtzUjBGQlIwNHNXVUZCV1N4RFFVRkRUeXhQUVVGaUxFVkJRV0k3UVVGRFFTeE5RVUZKUXl4TlFVRk5MRWRCUVVkR0xFbEJRVWtzUTBGQlEwY3NTVUZCVEN4RlFVRmlPenRCUVVOQkxGTkJRVThzUTBGQlEwUXNUVUZCVFN4RFFVRkRSU3hKUVVGbUxFVkJRWEZDTzBGQlEyNUNMRkZCUVUxRExFZEJRVWNzUjBGQlIwZ3NUVUZCVFN4RFFVRkRTU3hMUVVGUUxFTkJRV0VzUTBGQllpeERRVUZhTzBGQlEwRXNVVUZCVFVFc1MwRkJTeXhIUVVGSFNpeE5RVUZOTEVOQlFVTkpMRXRCUVZBc1EwRkJZU3hEUVVGaUxFTkJRV1E3TzBGQlEwRXNVVUZCU1VRc1IwRkJSeXhEUVVGRFJTeFZRVUZLTEVOQlFXVXNVMEZCWml4RFFVRktMRVZCUVN0Q08wRkJRemRDVkN4WlFVRk5MRU5CUVVOUExFZEJRVVFzUTBGQlRpeEhRVUZqY2tJc1YwRkJWeXhEUVVGRGMwSXNTMEZCUkN4RFFVRjZRanRCUVVORU96dEJRVU5FU2l4VlFVRk5MRWRCUVVkR0xFbEJRVWtzUTBGQlEwY3NTVUZCVEN4RlFVRlVPMEZCUTBRN08wRkJRMFFzVFVGQlNWZ3NhMEpCUVd0Q0xFTkJRVU5ETEZkQlFVUXNRMEZCZEVJc1JVRkJjVU03UVVGRGJrTkxMRlZCUVUwc1EwRkJRMVVzYjBKQlFWQXNSMEZCT0VJc1RVRkJPVUk3UVVGRFJDeEhRVVpFTEUxQlJVODdRVUZEVEZZc1ZVRkJUU3hEUVVGRFZ5eFJRVUZRTEVkQlFXdENMRXRCUVd4Q08wRkJRMFE3TzBGQlEwUXNVMEZCVDFnc1RVRkJVRHRCUVVORUxFTkJka0pOTzBGQmVVSkJMRWxCUVUxWkxHRkJRV0VzUjBGQlJ5eFRRVUZvUWtFc1lVRkJaMElzUTBGQlExb3NUVUZCUkN4RlFVRlpPMEZCUTNaRExFMUJRVTFoTEZkQlFWY3NSMEZCUjBNc1RVRkJUU3hEUVVGRFF5eEpRVUZRTEVOQlFWbG1MRTFCUVZvc1JVRkRha0puUWl4SFFVUnBRaXhEUVVOaUxGVkJRVUZVTEVkQlFVYzdRVUZCUVN4eFFrRkJUMEVzUjBGQlVDeGpRVUZqZUVJc1YwRkJWeXhEUVVGRGFVSXNUVUZCVFN4RFFVRkRUeXhIUVVGRUxFTkJRVkFzUTBGQmVrSTdRVUZCUVN4SFFVUlZMRVZCUldwQ1ZTeEpRVVpwUWl4RFFVVmFMRWRCUmxrc1EwRkJjRUk3UVVGSFFTeFRRVUZQU2l4WFFVRlhMR05CUVU5QkxGZEJRVkFzU1VGQmRVSXNSVUZCZWtNN1FVRkRSQ3hEUVV4Tk8wRkJUMEVzU1VGQlRVc3NWVUZCVlN4SFFVRkhMRk5CUVdKQkxGVkJRV0VzUTBGQlF6ZENMRTlCUVVRc1JVRkJWVU1zYlVKQlFWWXNSVUZCYTBNN1FVRkRNVVFzVFVGQlNTeERRVUZEVnl3MFJFRkJiVUlzUTBGQlEzaERMRkZCUVhCQ0xFVkJRVXdzUlVGQmNVTTdRVUZEYmtNc1YwRkJUelJDTEU5QlFWQTdRVUZEUkRzN1FVRkRSQ3hOUVVGSlFTeFBRVUZQTEVsQlFVbEJMRTlCUVU4c1EwRkJReXhuUWtGQlJDeERRVUZzUWl4SlFVRjNRMEVzVDBGQlR5eERRVUZETEdkQ1FVRkVMRU5CUVZBc1EwRkJNRUl4UWl4UlFVRXhRaXhEUVVGdFF5eHBRa0ZCYmtNc1EwRkJOVU1zUlVGQmJVYzdRVUZEYWtjc1YwRkJUM2xDTEd0Q1FVRnJRaXhEUVVGRFF5eFBRVUZFTEVWQlFWVkRMRzFDUVVGV0xFTkJRWHBDTzBGQlEwUTdPMEZCUTBRc1UwRkJUMFFzVDBGQlVEdEJRVU5FTEVOQlVrMDdRVUZWVVR0QlFVTmlTeXh2UWtGQmEwSXNSVUZCYkVKQkxHdENRVVJoTzBGQlJXSkxMREJDUVVGM1FpeEZRVUY0UWtFc2QwSkJSbUU3UVVGSFltRXNaVUZCWVN4RlFVRmlRU3hoUVVoaE8wRkJTV0pOTEZsQlFWVXNSVUZCVmtFN1FVRktZU3hEUVVGbUxFVTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNwRlFTeEpRVUZOUXl3clFrRkJLMElzUjBGQlJ5eERRVUY0UXp0QlFVTkJMRWxCUVUxRExEQkNRVUV3UWl4SFFVRkhMRU5CUVc1RE8wRkJRMEVzU1VGQlRVTXNNa0pCUVRKQ0xFZEJRVWNzUTBGQmNFTTdRVUZGUVN4SlFVRk5ReXhuUWtGQlowSXNSMEZCUnp0QlFVTjJRbXBETEZOQlFVOHNSVUZCUld0RExHTkJSR003UVVGRmRrSkRMSEZDUVVGdFFpeEZRVUZGUXl4elFrRkdSVHRCUVVkMlFrTXNaVUZCWVN4RlFVRkZReXh2UWtGSVVUdEJRVWwyUWtNc2EwSkJRV2RDTEVWQlFVVkRPMEZCU2tzc1EwRkJla0k3UVVGTlFTeEpRVUZOUXl4UlFVRlJMRWRCUVVjN1FVRkRabnBETEZOQlFVOHNSVUZCUlN4RFFVRkRMRTlCUVVRc1JVRkJWU3hGUVVGV0xFTkJSRTA3UVVGRlpqQkRMRkZCUVUwc1JVRkJSU3hEUVVGRExGRkJRVVFzUlVGQlZ5eEZRVUZZTEVWQlFXVkRMR3RDUVVGbU8wRkJSazhzUTBGQmFrSTdRVUZKUVN4SlFVRk5ReXhSUVVGUkxFZEJRVWM3UVVGRFprTXNUVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJSQ3hGUVVGVkxFVkJRVllzUTBGRVV6dEJRVVZtTjBNc1UwRkJUeXhGUVVGRmVVTXNVVUZCVVN4RFFVRkRla01zVDBGR1NEdEJRVWRtTUVNc1VVRkJUU3hGUVVGRlJDeFJRVUZSTEVOQlFVTkRMRTFCU0VZN1FVRkpabEFzY1VKQlFXMUNMRVZCUVVVc1EwRkJReXh4UWtGQlJDeEZRVUYzUWl4RlFVRjRRaXhEUVVwT08wRkJTMlpYTEUxQlFVa3NSVUZCUlN4RFFVRkRMRTFCUVVRc1JVRkJVeXhOUVVGVUxFVkJRV2xDU0N4clFrRkJha0lzUTBGTVV6dEJRVTFtU1N4UFFVRkxMRVZCUVVVc1EwRkJReXhQUVVGRUxFVkJRVlVzUlVGQlZpeEZRVUZqU2l4clFrRkJaQ3hEUVU1Uk8wRkJUMlpMTEZOQlFVOHNSVUZCUlN4RFFVRkRMR0ZCUVVRc1JVRkJaMElzUzBGQmFFSXNSVUZCZFVKTUxHdENRVUYyUWl4RFFWQk5PMEZCVVdaTkxGVkJRVkVzUlVGQlJTeERRVUZETEZWQlFVUXNSVUZCWVN4TFFVRmlMRVZCUVc5Q1RpeHJRa0ZCY0VJc1EwRlNTenRCUVZObVR5eHBRa0ZCWlN4RlFVRkZMRU5CUVVNc1owSkJRVVFzUlVGQmJVSXNTVUZCYmtJc1JVRkJlVUpRTEd0Q1FVRjZRaXhEUVZSR08wRkJWV1pPTEdWQlFXRXNSVUZCUlN4RFFVRkRMR1ZCUVVRc1JVRkJhMElzU1VGQmJFSXNRMEZXUVR0QlFWZG1ZeXh6UWtGQmIwSXNSVUZCUlN4RFFVRkRMRWxCUVVRc1JVRkJUeXhKUVVGUUxFTkJXRkE3UVVGWlprTXNZVUZCVnl4RlFVRkZMRU5CUVVNc1lVRkJSQ3hGUVVGblFpeEZRVUZvUWl4RlFVRnZRbFFzYTBKQlFYQkNMRU5CV2tVN1FVRmhaa29zYTBKQlFXZENMRVZCUVVVc1EwRkJReXhKUVVGRUxFVkJRVThzUTBGQlVEdEJRV0pJTEVOQlFXcENPMEZCWjBKQkxFbEJRVTFqTEdGQlFXRXNSMEZCUnp0QlFVTndRbkpFTEZOQlFVOHNSVUZCUlhsRExGRkJRVkVzUTBGQlEzcERMRTlCUkVVN1FVRkZjRUl3UXl4UlFVRk5MRVZCUVVWRUxGRkJRVkVzUTBGQlEwTXNUVUZHUnp0QlFVZHdRa3NzVDBGQlN5eEZRVUZGTEVOQlFVTXNUMEZCUkN4RlFVRlZMRVZCUVZZc1JVRkJZMG9zYTBKQlFXUXNRMEZJWVR0QlFVbHdRbE1zWVVGQlZ5eEZRVUZGTEVOQlFVTXNZVUZCUkN4RlFVRm5RaXhGUVVGb1FpeEZRVUZ2UWxRc2EwSkJRWEJDTEVOQlNrODdRVUZMY0VKS0xHdENRVUZuUWl4RlFVRkZMRU5CUVVNc1NVRkJSQ3hGUVVGUExFTkJRVkE3UVVGTVJTeERRVUYwUWpzN1FVRlJRU3hUUVVGVFpTeG5Ra0ZCVkN4RFFVRXdRa01zU1VGQk1VSXNSVUZCWjBNMVFpeEhRVUZvUXl4RlFVRnhRelpDTEd0Q1FVRnlReXhGUVVGNVJFTXNXVUZCZWtRc1JVRkJkVVU3UVVGRGNrVXNUVUZCVFRGRExFMUJRVTBzUjBGQlJ5eEZRVUZtTzBGQlEwRlZMRkZCUVUwc1EwRkJRME1zU1VGQlVDeERRVUZaUXl4SFFVRmFMRVZCUVdsQ0swSXNUMEZCYWtJc1EwRkJlVUlzVlVGQlFYaERMRWRCUVVjc1JVRkJTVHRCUVVNNVFpeHJRMEZCTWtOVExFZEJRVWNzUTBGQlExUXNSMEZCUkN4RFFVRTVRenRCUVVGQkxGRkJRVTk1UXl4UFFVRlFPMEZCUVVFc1VVRkJaMEpETEZsQlFXaENPMEZCUVVFc1VVRkJPRUpETEZOQlFUbENPenRCUVVOQkxGRkJRVTFETEdkQ1FVRm5RaXhIUVVGSE4wSXNaMEpCUVdkQ0xFTkJRVU5tTEVkQlFVUXNRMEZCZWtNN1FVRkRRU3hSUVVGSlF5eExRVUZMTEVkQlFVZDVReXhaUVVGYU96dEJRVU5CTEZGQlFVbEZMR2RDUVVGS0xFVkJRWE5DTzBGQlEzQkNNME1zVjBGQlN5eEhRVUZITWtNc1owSkJRV2RDTEVOQlFVTlFMRWxCUVVRc1JVRkJUMGtzVDBGQlVDeEZRVUZuUWtnc2EwSkJRV2hDTEVWQlFXOURReXhaUVVGd1F5eERRVUY0UWp0QlFVTkVMRXRCUmtRc1RVRkZUeXhKUVVGSlNTeFRRVUZLTEVWQlFXVTdRVUZEY0VJeFF5eFhRVUZMTEVkQlFVY3dReXhUUVVGVExFTkJRVU5NTEd0Q1FVRkVMRVZCUVhGQ1J5eFBRVUZ5UWl4RlFVRTRRa01zV1VGQk9VSXNRMEZCYWtJN1FVRkRSQ3hMUVVaTkxFMUJSVUVzU1VGQlNVd3NTVUZCU1N4SlFVRkpMRWxCUVZJc1NVRkJaMEpKTEU5QlFVOHNTMEZCU3l4SlFVRm9ReXhGUVVGelF6dEJRVU16UTNoRExGZEJRVXNzUjBGQlIyOURMRWxCUVVrc1EwRkJRMGtzVDBGQlJDeERRVUZLTEVsQlFXbENMRVZCUVhwQ08wRkJRMFE3TzBGQlEwUXNVVUZCVFVrc1NVRkJTU3hIUVVGSE8wRkJRVVUzUXl4VFFVRkhMRVZCUVVoQkxFZEJRVVk3UVVGQlQwTXNWMEZCU3l4RlFVRk1RVHRCUVVGUUxFdEJRV0k3TzBGQlJVRXNVVUZCU1N4UFFVRlBORU1zU1VGQlNTeERRVUZETlVNc1MwRkJXaXhMUVVGelFpeFJRVUYwUWl4SlFVRnJRelJETEVsQlFVa3NRMEZCUXpWRExFdEJRVE5ETEVWQlFXdEVPMEZCUTJoRVNpeFpRVUZOTEVOQlFVTnBSQ3hKUVVGUUxGZEJRV1U1UXl4SFFVRm1MR2RDUVVGMVFqWkRMRWxCUVVrc1EwRkJRelZETEV0QlFUVkNPMEZCUTBRN1FVRkRSaXhIUVdoQ1JEdEJRV3RDUVN4VFFVRlBTaXhOUVVGTkxFTkJRVU5oTEVsQlFWQXNRMEZCV1N4SFFVRmFMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUVVN4elFrRkJWQ3hEUVVGblF6WkNMRWxCUVdoRExFVkJRWE5EVGl4UFFVRjBReXhGUVVFclEwZ3NhMEpCUVM5RExFVkJRVzFGTzBGQlEycEZMRTFCUVVrc1EwRkJRMEVzYTBKQlFVUXNTVUZCZFVJc1EwRkJRMEVzYTBKQlFXdENMRU5CUVVOSExFOUJRVVFzUTBGQk9VTXNSVUZCZVVRN1FVRkRka1FzVjBGQlR5eEZRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJUMnhETEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hEUVVGWk9FSXNhMEpCUVd0Q0xFTkJRVU5ITEU5QlFVUXNRMEZCT1VJc1JVRkJlVU5vUXl4SFFVRjZReXhEUVVFMlF5eFZRVUZCVkN4SFFVRkhPMEZCUVVFc1YwRkJTWE5ETEd0Q1FVRnJRaXhEUVVGRFJ5eFBRVUZFTEVOQlFXeENMRU5CUVRSQ2VrTXNSMEZCTlVJc1JVRkJhVU5uUkN4RlFVRnlRenRCUVVGQkxFZEJRV2hFTEVWQlFYbEdkRU1zU1VGQmVrWXNRMEZCT0VZc1IwRkJPVVlzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVZOVkxHOUNRVUZVTEVOQlFUaENNa0lzU1VGQk9VSXNSVUZCYjBOT0xFOUJRWEJETEVWQlFUWkRTQ3hyUWtGQk4wTXNSVUZCYVVWRExGbEJRV3BGTEVWQlFTdEZPMEZCUXpkRkxFMUJRVWtzUTBGQlEwUXNhMEpCUVVRc1NVRkJkVUpCTEd0Q1FVRnJRaXhEUVVGRFZ5eGhRVUZ1UWl4SlFVRnZReXhKUVVFelJDeEpRVUZ0UlN4RFFVRkRWaXhaUVVGd1JTeEpRVUZ2UmtFc1dVRkJXU3hEUVVGRFZ5eGpRVUZpTEVsQlFTdENMRWxCUVhaSUxFVkJRVFpJTzBGQlF6TklMRmRCUVU4c1NVRkJVRHRCUVVORU96dEJRVU5FTEZOQlFVOVlMRmxCUVZrc1EwRkJRMWNzWTBGQllpeEhRVUU0UWxvc2EwSkJRV3RDTEVOQlFVTlhMR0ZCUVhoRU8wRkJRMFE3TzBGQlJVUXNVMEZCVTNoQ0xHdENRVUZVTEVOQlFUUkNNRUlzUjBGQk5VSXNSVUZCYVVOdVJDeEhRVUZxUXl4RlFVRnpRekJETEZsQlFYUkRMRVZCUVc5RU8wRkJRMnhFTEUxQlFVbDZReXhMUVVGTExFZEJRVWRyUkN4SFFVRkhMRWxCUVVrc1VVRkJUMEVzUjBGQlVDeE5RVUZsTEZGQlFYUkNMRWxCUVd0RGJrUXNSMEZCYkVNc1IwRkJkME50UkN4SFFVRkhMRU5CUVVOdVJDeEhRVUZFTEVOQlFUTkRMRWRCUVcxRUxFbEJRUzlFTzBGQlEwRkRMRTlCUVVzc1IwRkJSMEVzUzBGQlN5eEpRVUZKTEVsQlFWUXNSMEZCWjBKNVF5eFpRVUZvUWl4SFFVRXJRbnBETEV0QlFYWkRPMEZCUTBGQkxFOUJRVXNzUjBGQlJ5eFBRVUZQZVVNc1dVRkJVQ3hMUVVGM1FpeFRRVUY0UWl4SFFVRnZRek5HTEU5QlFVOHNRMEZCUTJ0RUxFdEJRVVFzUTBGQk0wTXNSMEZCY1VSQkxFdEJRVGRFTzBGQlEwRXNVMEZCVDBFc1MwRkJTeXhKUVVGSkxFbEJRVlFzUjBGQlowSkJMRXRCUVdoQ0xFZEJRWGRDZVVNc1dVRkJMMEk3UVVGRFJEczdRVUZGUkN4VFFVRlRNVUlzWTBGQlZDeERRVUYzUW5GQ0xFbEJRWGhDTEVWQlFUaENja01zUjBGQk9VSXNSVUZCYlVNN1FVRkRha01zVFVGQlRVTXNTMEZCU3l4SFFVRkhiME1zU1VGQlNTeEhRVUZIUVN4SlFVRkpMRU5CUVVOeVF5eEhRVUZFTEVOQlFWQXNSMEZCWlN4SlFVRnFReXhEUVVScFF5eERRVVZxUXpzN1FVRkRRU3hUUVVGUFF5eExRVUZMTEVsQlFVa3NTVUZCVkN4eFFrRkJNa0pCTEV0QlFUTkNMRWxCUVhGRExFVkJRVFZETzBGQlEwUTdPMEZCUlVRc1UwRkJVM0ZDTEcxQ1FVRlVMRU5CUVRaQ1pTeEpRVUUzUWl4RlFVRnRRenRCUVVOcVF5eE5RVUZKTEVOQlFVTkJMRWxCUVVRc1NVRkJVeXhEUVVGRFFTeEpRVUZKTEVOQlFVTXNkVUpCUVVRc1EwRkJaQ3hKUVVFeVEwRXNTVUZCU1N4RFFVRkRMSFZDUVVGRUxFTkJRVW9zUzBGQmEwTXNUMEZCYWtZc1JVRkJNRVk3UVVGRGVFWXNWMEZCVDNwQ0xDdENRVUZRTzBGQlEwUTdPMEZCUlVRc1RVRkJUWGRETEZsQlFWa3NSMEZCUjJZc1NVRkJTU3hEUVVGRExHMUNRVUZFTEVOQlFVb3NSMEZCTkVJc1NVRkJTV2RDTEVsQlFVb3NRMEZCVTJoQ0xFbEJRVWtzUTBGQlF5eHRRa0ZCUkN4RFFVRmlMRU5CUVRWQ0xFZEJRV3RGTEVsQlFYWkdPMEZCUTBFc1RVRkJUV2xDTEdGQlFXRXNSMEZCUjJwQ0xFbEJRVWtzUTBGQlF5eHZRa0ZCUkN4RFFVRktMRWRCUVRaQ0xFbEJRVWxuUWl4SlFVRktMRU5CUVZOb1FpeEpRVUZKTEVOQlFVTXNiMEpCUVVRc1EwRkJZaXhEUVVFM1FpeEhRVUZ2UlN4SlFVRXhSanRCUVVWQkxGTkJRVTlsTEZsQlFWa3NTVUZCU1VVc1lVRkJhRUlzU1VGQmFVTkdMRmxCUVZrc1EwRkJRMGNzVDBGQllpeExRVUY1UWtRc1lVRkJZU3hEUVVGRFF5eFBRVUZrTEVWQlFURkVMRWRCUVc5R01VTXNNRUpCUVhCR0xFZEJRV2xJUXl3eVFrRkJlRWc3UVVGRFJEczdRVUZGVFN4SlFVRk5NRU1zYjBKQlFXOUNMRWRCUVVjc1UwRkJka0pCTEc5Q1FVRjFRaXhEUVVGRFF5eEpRVUZFTEVWQlFVOXVRaXhyUWtGQlVDeEZRVUU0UWp0QlFVTm9SU3cwUWtGQmJVSkdMR2RDUVVGblFpeERRVUZEY1VJc1NVRkJSQ3hGUVVGUGJFTXNVVUZCVUN4RlFVRnBRbVVzYTBKQlFXcENMRU5CUVc1RE8wRkJRMFFzUTBGR1RUdEJRVWxCTEVsQlFVMXZRaXh2UWtGQmIwSXNSMEZCUnl4VFFVRjJRa0VzYjBKQlFYVkNMRU5CUVVOWUxFbEJRVVFzUlVGQlQxUXNhMEpCUVZBc1JVRkJNa0paTEdOQlFUTkNMRVZCUVRoRE8wRkJRMmhHTEUxQlFVMVlMRmxCUVZrc1IwRkJSenRCUVVGRlZ5eHJRa0ZCWXl4RlFVRmtRVHRCUVVGR0xFZEJRWEpDTzBGQlEwRXNUVUZCVFZNc2MwSkJRWE5DTEVkQlFVZHlRaXhyUWtGQmEwSXNTVUZCU1VFc2EwSkJRV3RDTEVOQlFVTnpRaXhMUVVGNlF5eEhRVUZwUkhSQ0xHdENRVUZyUWl4RFFVRkRjMElzUzBGQmJrSXNRMEZCZVVKaUxFbEJRVWtzUTBGQlF5eFBRVUZFTEVOQlFUZENMRU5CUVdwRUxFZEJRVEpHTEVWQlFURklPMEZCUTBFc05FSkJRVzFDV0N4blFrRkJaMElzUTBGQlExY3NTVUZCUkN4RlFVRlBja0lzVVVGQlVDeEZRVUZwUW1sRExITkNRVUZxUWl4RlFVRjVRM0JDTEZsQlFYcERMRU5CUVc1RE8wRkJRMFFzUTBGS1RUdEJRVTFCTEVsQlFVMXpRaXg1UWtGQmVVSXNSMEZCUnl4VFFVRTFRa0VzZVVKQlFUUkNMRU5CUVVORExGTkJRVVFzUlVGQldYaENMR3RDUVVGYUxFVkJRVzFETzBGQlF6RkZMR2xEUVVGM1FrWXNaMEpCUVdkQ0xFTkJRVU13UWl4VFFVRkVMRVZCUVZrelFpeGhRVUZhTEVWQlFUSkNSeXhyUWtGQk0wSXNRMEZCZUVNN1FVRkRSQ3hEUVVaTk8wRkJTVkU3UVVGRFltOUNMSE5DUVVGdlFpeEZRVUZ3UWtFc2IwSkJSR0U3UVVGRllrY3NNa0pCUVhsQ0xFVkJRWHBDUVN4NVFrRkdZVHRCUVVkaVRDeHpRa0ZCYjBJc1JVRkJjRUpCTzBGQlNHRXNRMEZCWml4Rk96czdPenM3T3pzN096czdRVU51U0VFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2liV2R1YkMxelpYSjJhV05sTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUh0Y2JseDBYSFIyWVhJZ1lTQTlJR1poWTNSdmNua29LVHRjYmx4MFhIUm1iM0lvZG1GeUlHa2dhVzRnWVNrZ0tIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QS9JR1Y0Y0c5eWRITWdPaUJ5YjI5MEtWdHBYU0E5SUdGYmFWMDdYRzVjZEgxY2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNiaUlzSWk4cUlTQW9ZeWtnUVc1a2NtVmhJRWRwWVcxdFlYSmphR2tnTFNCSlUwTWdLaTljYm5aaGNpQnpaV3htSUQwZ2UzMDdYRzUwY25rZ2UxeHVJQ0FvWm5WdVkzUnBiMjRnS0ZWU1RGTmxZWEpqYUZCaGNtRnRjeXdnY0d4MWN5a2dlMXh1SUNBZ0lHbG1JQ2hjYmlBZ0lDQWdJRzVsZHlCVlVreFRaV0Z5WTJoUVlYSmhiWE1vSjNFOUpUSkNKeWt1WjJWMEtDZHhKeWtnSVQwOUlIQnNkWE1nZkh4Y2JpQWdJQ0FnSUc1bGR5QlZVa3hUWldGeVkyaFFZWEpoYlhNb2UzRTZJSEJzZFhOOUtTNW5aWFFvSjNFbktTQWhQVDBnY0d4MWN5QjhmRnh1SUNBZ0lDQWdibVYzSUZWU1RGTmxZWEpqYUZCaGNtRnRjeWhiV3lkeEp5d2djR3gxYzExZEtTNW5aWFFvSjNFbktTQWhQVDBnY0d4MWN5QjhmRnh1SUNBZ0lDQWdibVYzSUZWU1RGTmxZWEpqYUZCaGNtRnRjeWduY1QxY1hHNG5LUzUwYjFOMGNtbHVaeWdwSUNFOVBTQW5jVDBsTUVFbklIeDhYRzRnSUNBZ0lDQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSHR4T2lBbklDWW5mU2t1ZEc5VGRISnBibWNvS1NBaFBUMGdKM0U5S3lVeU5pY2dmSHhjYmlBZ0lDQWdJRzVsZHlCVlVreFRaV0Z5WTJoUVlYSmhiWE1vZTNFNklDY2xlbmduZlNrdWRHOVRkSEpwYm1jb0tTQWhQVDBnSjNFOUpUSTFlbmduWEc0Z0lDQWdLVnh1SUNBZ0lDQWdkR2h5YjNjZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6TzF4dUlDQWdJSE5sYkdZdVZWSk1VMlZoY21Ob1VHRnlZVzF6SUQwZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6TzF4dUlDQjlLRlZTVEZObFlYSmphRkJoY21GdGN5d2dKeXNuS1NrN1hHNTlJR05oZEdOb0tGVlNURk5sWVhKamFGQmhjbUZ0Y3lrZ2UxeHVJQ0FvWm5WdVkzUnBiMjRnS0U5aWFtVmpkQ3dnVTNSeWFXNW5MQ0JwYzBGeWNtRjVLU0I3SjNWelpTQnpkSEpwWTNRbk8xeHVJQ0FnSUhaaGNpQmpjbVZoZEdVZ1BTQlBZbXBsWTNRdVkzSmxZWFJsTzF4dUlDQWdJSFpoY2lCa1pXWnBibVZRY205d1pYSjBlU0E5SUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVUdGNiaUFnSUNCMllYSWdabWx1WkNBOUlDOWJJU2RjWENoY1hDbCtYWHdsTWpCOEpUQXdMMmM3WEc0Z0lDQWdkbUZ5SUdacGJtUlFaWEpqWlc1MFUybG5iaUE5SUM4bEtEOGhXekF0T1dFdFprRXRSbDE3TW4wcEwyYzdYRzRnSUNBZ2RtRnlJSEJzZFhNZ1BTQXZYRndyTDJjN1hHNGdJQ0FnZG1GeUlISmxjR3hoWTJVZ1BTQjdYRzRnSUNBZ0lDQW5JU2M2SUNjbE1qRW5MRnh1SUNBZ0lDQWdYQ0luWENJNklDY2xNamNuTEZ4dUlDQWdJQ0FnSnlnbk9pQW5KVEk0Snl4Y2JpQWdJQ0FnSUNjcEp6b2dKeVV5T1Njc1hHNGdJQ0FnSUNBbmZpYzZJQ2NsTjBVbkxGeHVJQ0FnSUNBZ0p5VXlNQ2M2SUNjckp5eGNiaUFnSUNBZ0lDY2xNREFuT2lBblhGeDRNREFuWEc0Z0lDQWdmVHRjYmlBZ0lDQjJZWElnY0hKdmRHOGdQU0I3WEc0Z0lDQWdJQ0JoY0hCbGJtUTZJR1oxYm1OMGFXOXVJQ2hyWlhrc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lHRndjR1Z1WkZSdktIUm9hWE11WDNWdVoyRndMQ0JyWlhrc0lIWmhiSFZsS1R0Y2JpQWdJQ0FnSUgwc1hHNGdJQ0FnSUNCa1pXeGxkR1U2SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ0lDQWdJQ0FnWkdWc1pYUmxJSFJvYVhNdVgzVnVaMkZ3VzJ0bGVWMDdYRzRnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtaGhjeWhyWlhrcElEOGdkR2hwY3k1ZmRXNW5ZWEJiYTJWNVhWc3dYU0E2SUc1MWJHdzdYRzRnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdaMlYwUVd4c09pQm1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWhoY3loclpYa3BJRDhnZEdocGN5NWZkVzVuWVhCYmEyVjVYUzV6YkdsalpTZ3dLU0E2SUZ0ZE8xeHVJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lHaGhjem9nWm5WdVkzUnBiMjRnS0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhMlY1SUdsdUlIUm9hWE11WDNWdVoyRndPMXh1SUNBZ0lDQWdmU3hjYmlBZ0lDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z0tHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZkVzVuWVhCYmEyVjVYU0E5SUZ0VGRISnBibWNvZG1Gc2RXVXBYVHRjYmlBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0JtYjNKRllXTm9PaUJtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNzSUhSb2FYTkJjbWNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE5sYkdZZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYzJWc1ppNWZkVzVuWVhBcFhHNGdJQ0FnSUNBZ0lDQWdjMlZzWmk1ZmRXNW5ZWEJiYTJWNVhTNW1iM0pGWVdOb0tHbHVkbTlyWlN3Z2EyVjVLVHRjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnYVc1MmIydGxLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnN1WTJGc2JDaDBhR2x6UVhKbkxDQjJZV3gxWlN3Z1UzUnlhVzVuS0d0bGVTa3NJSE5sYkdZcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdkRzlLVTA5T09pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3ZlR0Y2JpQWdJQ0FnSUgwc1hHNGdJQ0FnSUNCMGIxTjBjbWx1WnpvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2NYVmxjbmtnUFNCYlhUdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhMlY1SUdsdUlIUm9hWE11WDNWdVoyRndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR1Z1WTI5a1pXUWdQU0JsYm1OdlpHVW9hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVNBOUlEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaU0E5SUhSb2FYTXVYM1Z1WjJGd1cydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBJRHdnZG1Gc2RXVXViR1Z1WjNSb095QnBLeXRjYmlBZ0lDQWdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhGMVpYSjVMbkIxYzJnb1pXNWpiMlJsWkNBcklDYzlKeUFySUdWdVkyOWtaU2gyWVd4MVpWdHBYU2twTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjWFZsY25rdWFtOXBiaWduSmljcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNGdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJSEJ5YjNSdktWeHVJQ0FnSUNBZ1pHVm1hVzVsVUhKdmNHVnlkSGtvVlZKTVUyVmhjbU5vVUdGeVlXMXpMbkJ5YjNSdmRIbHdaU3dnYTJWNUxDQjdYRzRnSUNBZ0lDQWdJR052Ym1acFozVnlZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnZDNKcGRHRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSFpoYkhWbE9pQndjbTkwYjF0clpYbGRYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQnpaV3htTGxWU1RGTmxZWEpqYUZCaGNtRnRjeUE5SUZWU1RGTmxZWEpqYUZCaGNtRnRjenRjYmlBZ0lDQm1kVzVqZEdsdmJpQlZVa3hUWldGeVkyaFFZWEpoYlhNb2NYVmxjbmtwSUh0Y2JpQWdJQ0FnSUhaaGNpQmthV04wSUQwZ1kzSmxZWFJsS0c1MWJHd3BPMXh1SUNBZ0lDQWdaR1ZtYVc1bFVISnZjR1Z5ZEhrb2RHaHBjeXdnSjE5MWJtZGhjQ2NzSUh0MllXeDFaVG9nWkdsamRIMHBPMXh1SUNBZ0lDQWdjM2RwZEdOb0lDaDBjblZsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnSVhGMVpYSjVPbHh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0JqWVhObElIUjVjR1Z2WmlCeGRXVnllU0E5UFQwZ0ozTjBjbWx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hGMVpYSjVMbU5vWVhKQmRDZ3dLU0E5UFQwZ0p6OG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnhkV1Z5ZVNBOUlIRjFaWEo1TG5Oc2FXTmxLREVwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnBjbk1nUFNCeGRXVnllUzV6Y0d4cGRDZ25KaWNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhU0E5SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlc1bmRHZ2dQU0J3WVdseWN5NXNaVzVuZEdnN0lHa2dQQ0JzWlc1bmRHZzdJR2tySzF4dUlDQWdJQ0FnSUNBZ0lDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFpoYkhWbElEMGdjR0ZwY25OYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdhVzVrWlhnZ1BTQjJZV3gxWlM1cGJtUmxlRTltS0NjOUp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9MVEVnUENCcGJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JoY0hCbGJtUlVieWhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrYVdOMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxZMjlrWlNoMllXeDFaUzV6YkdsalpTZ3dMQ0JwYm1SbGVDa3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWTI5a1pTaDJZV3gxWlM1emJHbGpaU2hwYm1SbGVDQXJJREVwS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gyWVd4MVpTNXNaVzVuZEdncGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGNIQmxibVJVYnloY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2FXTjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWTI5a1pTaDJZV3gxWlNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0p5ZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJR05oYzJVZ2FYTkJjbkpoZVNoeGRXVnllU2s2WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2tnUFNBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JRDBnY1hWbGNua3ViR1Z1WjNSb095QnBJRHdnYkdWdVozUm9PeUJwS3l0Y2JpQWdJQ0FnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIyWVd4MVpTQTlJSEYxWlhKNVcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYQndaVzVrVkc4b1pHbGpkQ3dnZG1Gc2RXVmJNRjBzSUhaaGJIVmxXekZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJR05oYzJVZ0oyWnZja1ZoWTJnbklHbHVJSEYxWlhKNU9seHVJQ0FnSUNBZ0lDQWdJSEYxWlhKNUxtWnZja1ZoWTJnb1lXUmtSV0ZqYUN3Z1pHbGpkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUhGMVpYSjVLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYQndaVzVrVkc4b1pHbGpkQ3dnYTJWNUxDQnhkV1Z5ZVZ0clpYbGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQmhaR1JGWVdOb0tIWmhiSFZsTENCclpYa3BJSHRjYmlBZ0lDQWdJR0Z3Y0dWdVpGUnZLSFJvYVhNc0lHdGxlU3dnZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlHRndjR1Z1WkZSdktHUnBZM1FzSUd0bGVTd2dkbUZzZFdVcElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhNZ1BTQnBjMEZ5Y21GNUtIWmhiSFZsS1NBL0lIWmhiSFZsTG1wdmFXNG9KeXduS1NBNklIWmhiSFZsTzF4dUlDQWdJQ0FnYVdZZ0tHdGxlU0JwYmlCa2FXTjBLVnh1SUNBZ0lDQWdJQ0JrYVdOMFcydGxlVjB1Y0hWemFDaHlaWE1wTzF4dUlDQWdJQ0FnWld4elpWeHVJQ0FnSUNBZ0lDQmthV04wVzJ0bGVWMGdQU0JiY21WelhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCa1pXTnZaR1VvYzNSeUtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pHVmpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtITjBjaTV5WlhCc1lXTmxLR1pwYm1SUVpYSmpaVzUwVTJsbmJpd2dKeVV5TlNjcExuSmxjR3hoWTJVb2NHeDFjeXdnSnlBbktTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1pXNWpiMlJsS0hOMGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnVZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaHpkSElwTG5KbGNHeGhZMlVvWm1sdVpDd2djbVZ3YkdGalpYSXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlISmxjR3hoWTJWeUtHMWhkR05vS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnY21Wd2JHRmpaVnR0WVhSamFGMDdYRzRnSUNBZ2ZWeHVYRzRnSUgwb1QySnFaV04wTENCVGRISnBibWNzSUVGeWNtRjVMbWx6UVhKeVlYa3BLVHRjYm4xY2JseHVLR1oxYm1OMGFXOXVJQ2hWVWt4VFpXRnlZMmhRWVhKaGJYTlFjbTkwYnlrZ2UxeHVYRzRnSUhaaGNpQnBkR1Z5WVdKc1pTQTlJR1poYkhObE8xeHVJQ0IwY25rZ2V5QnBkR1Z5WVdKc1pTQTlJQ0VoVTNsdFltOXNMbWwwWlhKaGRHOXlPeUI5SUdOaGRHTm9JQ2h2WDA4cElIdDlYRzVjYmlBZ0x5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHVnNjMlVnS2k5Y2JpQWdhV1lnS0NFb0oyWnZja1ZoWTJnbklHbHVJRlZTVEZObFlYSmphRkJoY21GdGMxQnliM1J2S1NrZ2UxeHVJQ0FnSUZWU1RGTmxZWEpqYUZCaGNtRnRjMUJ5YjNSdkxtWnZja1ZoWTJnZ1BTQm1kVzVqZEdsdmJpQm1iM0pGWVdOb0tHTmhiR3hpWVdOckxDQjBhR2x6UVhKbktTQjdYRzRnSUNBZ0lDQjJZWElnYzJWc1ppQTlJSFJvYVhNN1hHNGdJQ0FnSUNCMllYSWdibUZ0WlhNZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUNBZ0lDQWdkR2hwY3k1MGIxTjBjbWx1WnlncFhHNGdJQ0FnSUNBZ0lDQWdMbkpsY0d4aFkyVW9MejFiWEZ4elhGeFRYU28vS0Q4Nkpud2tLUzluTENBblBTY3BYRzRnSUNBZ0lDQWdJQ0FnTG5Od2JHbDBLQ2M5SnlsY2JpQWdJQ0FnSUNBZ0lDQXVabTl5UldGamFDaG1kVzVqZEdsdmJpQW9ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnVZVzFsTG14bGJtZDBhQ0I4ZkNCdVlXMWxJR2x1SUc1aGJXVnpLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FvYm1GdFpYTmJibUZ0WlYwZ1BTQnpaV3htTG1kbGRFRnNiQ2h1WVcxbEtTa3VabTl5UldGamFDaG1kVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXk1allXeHNLSFJvYVhOQmNtY3NJSFpoYkhWbExDQnVZVzFsTENCelpXeG1LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdaV3h6WlNBcUwxeHVJQ0JwWmlBb0lTZ25hMlY1Y3ljZ2FXNGdWVkpNVTJWaGNtTm9VR0Z5WVcxelVISnZkRzhwS1NCN1hHNGdJQ0FnVlZKTVUyVmhjbU5vVUdGeVlXMXpVSEp2ZEc4dWEyVjVjeUE5SUdaMWJtTjBhVzl1SUd0bGVYTW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdhWFJsY21GMGIzSW9kR2hwY3l3Z1puVnVZM1JwYjI0b2RtRnNkV1VzSUd0bGVTa2dleUIwYUdsekxuQjFjMmdvYTJWNUtUc2dmU2s3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVYRzRnSUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ1pXeHpaU0FxTDF4dUlDQnBaaUFvSVNnbmRtRnNkV1Z6SnlCcGJpQlZVa3hUWldGeVkyaFFZWEpoYlhOUWNtOTBieWtwSUh0Y2JpQWdJQ0JWVWt4VFpXRnlZMmhRWVhKaGJYTlFjbTkwYnk1MllXeDFaWE1nUFNCbWRXNWpkR2x2YmlCMllXeDFaWE1vS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYVhSbGNtRjBiM0lvZEdocGN5d2dablZ1WTNScGIyNG9kbUZzZFdVc0lHdGxlU2tnZXlCMGFHbHpMbkIxYzJnb2RtRnNkV1VwT3lCOUtUdGNiaUFnSUNCOU8xeHVJQ0I5WEc1Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJR1ZzYzJVZ0tpOWNiaUFnYVdZZ0tDRW9KMlZ1ZEhKcFpYTW5JR2x1SUZWU1RGTmxZWEpqYUZCaGNtRnRjMUJ5YjNSdktTa2dlMXh1SUNBZ0lGVlNURk5sWVhKamFGQmhjbUZ0YzFCeWIzUnZMbVZ1ZEhKcFpYTWdQU0JtZFc1amRHbHZiaUJsYm5SeWFXVnpLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR2wwWlhKaGRHOXlLSFJvYVhNc0lHWjFibU4wYVc5dUtIWmhiSFZsTENCclpYa3BJSHNnZEdocGN5NXdkWE5vS0Z0clpYa3NJSFpoYkhWbFhTazdJSDBwTzF4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ1pXeHpaU0FxTDF4dUlDQnBaaUFvYVhSbGNtRmliR1VnSmlZZ0lTaFRlVzFpYjJ3dWFYUmxjbUYwYjNJZ2FXNGdWVkpNVTJWaGNtTm9VR0Z5WVcxelVISnZkRzhwS1NCN1hHNGdJQ0FnVlZKTVUyVmhjbU5vVUdGeVlXMXpVSEp2ZEc5YlUzbHRZbTlzTG1sMFpYSmhkRzl5WFNBOUlGVlNURk5sWVhKamFGQmhjbUZ0YzFCeWIzUnZMbVZ1ZEhKcFpYTTdYRzRnSUgxY2JseHVJQ0F2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnWld4elpTQXFMMXh1SUNCcFppQW9JU2duYzI5eWRDY2dhVzRnVlZKTVUyVmhjbU5vVUdGeVlXMXpVSEp2ZEc4cEtTQjdYRzRnSUNBZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6VUhKdmRHOHVjMjl5ZENBOUlHWjFibU4wYVc5dUlITnZjblFvS1NCN1hHNGdJQ0FnSUNCMllYSmNiaUFnSUNBZ0lDQWdaVzUwY21sbGN5QTlJSFJvYVhNdVpXNTBjbWxsY3lncExGeHVJQ0FnSUNBZ0lDQmxiblJ5ZVNBOUlHVnVkSEpwWlhNdWJtVjRkQ2dwTEZ4dUlDQWdJQ0FnSUNCa2IyNWxJRDBnWlc1MGNua3VaRzl1WlN4Y2JpQWdJQ0FnSUNBZ2EyVjVjeUE5SUZ0ZExGeHVJQ0FnSUNBZ0lDQjJZV3gxWlhNZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BMRnh1SUNBZ0lDQWdJQ0JwTENCclpYa3NJSFpoYkhWbFhHNGdJQ0FnSUNBN1hHNGdJQ0FnSUNCM2FHbHNaU0FvSVdSdmJtVXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0JsYm5SeWVTNTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2EyVjVJRDBnZG1Gc2RXVmJNRjA3WEc0Z0lDQWdJQ0FnSUd0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lTaHJaWGtnYVc0Z2RtRnNkV1Z6S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbGMxdHJaWGxkSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1Gc2RXVnpXMnRsZVYwdWNIVnphQ2gyWVd4MVpWc3hYU2s3WEc0Z0lDQWdJQ0FnSUdWdWRISjVJRDBnWlc1MGNtbGxjeTV1WlhoMEtDazdYRzRnSUNBZ0lDQWdJR1J2Ym1VZ1BTQmxiblJ5ZVM1a2IyNWxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdMeThnYm05MElIUm9aU0JqYUdGdGNHbHZiaUJwYmlCbFptWnBZMmxsYm1ONVhHNGdJQ0FnSUNBdkx5QmlkWFFnZEdobGMyVWdkSGR2SUdKcGRITWdhblZ6ZENCa2J5QjBhR1VnYW05aVhHNGdJQ0FnSUNCclpYbHpMbk52Y25Rb0tUdGNiaUFnSUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCclpYbHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WkdWc1pYUmxLR3RsZVhOYmFWMHBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdabTl5SUNocElEMGdNRHNnYVNBOElHdGxlWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdhMlY1SUQwZ2EyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoY0hCbGJtUW9hMlY1TENCMllXeDFaWE5iYTJWNVhTNXphR2xtZENncEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdhWFJsY21GMGIzSW9jMlZzWml3Z1kyRnNiR0poWTJzcElIdGNiaUFnSUNCMllYSWdhWFJsYlhNZ1BTQmJYVHRjYmlBZ0lDQnpaV3htTG1admNrVmhZMmdvWTJGc2JHSmhZMnNzSUdsMFpXMXpLVHRjYmlBZ0lDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdibVY0ZENBcUwxeHVJQ0FnSUhKbGRIVnliaUJwZEdWeVlXSnNaU0EvWEc0Z0lDQWdJQ0JwZEdWdGMxdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDa2dPbHh1SUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0J1WlhoME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdkbUZzZFdVZ1BTQnBkR1Z0Y3k1emFHbG1kQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1pHOXVaVG9nZG1Gc2RXVWdQVDA5SUhadmFXUWdNQ3dnZG1Gc2RXVTZJSFpoYkhWbGZUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVHRjYmlBZ2ZWeHVYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lDaG1kVzVqZEdsdmJpQW9UMkpxWldOMEtTQjdYRzRnSUNBZ2RtRnlYRzRnSUNBZ0lDQmtVQ0E5SUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTeGNiaUFnSUNBZ0lHZFBVRVFnUFNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlMRnh1SUNBZ0lDQWdZM0psWVhSbFUyVmhjbU5vVUdGeVlXMXpVRzlzYkhWMFpTQTlJR1oxYm1OMGFXOXVJQ2h6WldGeVkyZ3BJSHRjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWVhCd1pXNWtLRzVoYldVc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdWVkpNVTJWaGNtTm9VR0Z5WVcxelVISnZkRzh1WVhCd1pXNWtMbU5oYkd3b2RHaHBjeXdnYm1GdFpTd2dkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJRzVoYldVZ1BTQjBhR2x6TG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNBZ0lDQWdjMlZoY21Ob0xuTmxkQzVqWVd4c0tIUm9hWE11WDNWemNDd2dibUZ0WlNBL0lDZ25QeWNnS3lCdVlXMWxLU0E2SUNjbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJrWld3b2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lGVlNURk5sWVhKamFGQmhjbUZ0YzFCeWIzUnZMbVJsYkdWMFpTNWpZV3hzS0hSb2FYTXNJRzVoYldVcE8xeHVJQ0FnSUNBZ0lDQWdJRzVoYldVZ1BTQjBhR2x6TG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNBZ0lDQWdjMlZoY21Ob0xuTmxkQzVqWVd4c0tIUm9hWE11WDNWemNDd2dibUZ0WlNBL0lDZ25QeWNnS3lCdVlXMWxLU0E2SUNjbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJ6WlhRb2JtRnRaU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCVlVreFRaV0Z5WTJoUVlYSmhiWE5RY205MGJ5NXpaWFF1WTJGc2JDaDBhR2x6TENCdVlXMWxMQ0IyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnYm1GdFpTQTlJSFJvYVhNdWRHOVRkSEpwYm1jb0tUdGNiaUFnSUNBZ0lDQWdJQ0J6WldGeVkyZ3VjMlYwTG1OaGJHd29kR2hwY3k1ZmRYTndMQ0J1WVcxbElEOGdLQ2MvSnlBcklHNWhiV1VwSURvZ0p5Y3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvYzNBc0lIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjM0F1WVhCd1pXNWtJRDBnWVhCd1pXNWtPMXh1SUNBZ0lDQWdJQ0FnSUhOd0xtUmxiR1YwWlNBOUlHUmxiRHRjYmlBZ0lDQWdJQ0FnSUNCemNDNXpaWFFnUFNCelpYUTdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1JRS0hOd0xDQW5YM1Z6Y0Njc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGR5YVhSaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ1kzSmxZWFJsVTJWaGNtTm9VR0Z5WVcxelEzSmxZWFJsSUQwZ1puVnVZM1JwYjI0Z0tIQnZiR3gxZEdWVFpXRnlZMmhRWVhKaGJYTXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2h2WW1vc0lITndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pGQW9YRzRnSUNBZ0lDQWdJQ0FnSUNCdlltb3NJQ2RmYzJWaGNtTm9VR0Z5WVcxekp5d2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIZHlhWFJoWW14bE9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2djRzlzYkhWMFpWTmxZWEpqYUZCaGNtRnRjeWh6Y0N3Z2IySnFLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOd08xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdmU3hjYmlBZ0lDQWdJSFZ3WkdGMFpWTmxZWEpqYUZCaGNtRnRjeUE5SUdaMWJtTjBhVzl1SUNoemNDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1lYQndaVzVrSUQwZ2MzQXVZWEJ3Wlc1a08xeHVJQ0FnSUNBZ0lDQnpjQzVoY0hCbGJtUWdQU0JWVWt4VFpXRnlZMmhRWVhKaGJYTlFjbTkwYnk1aGNIQmxibVE3WEc0Z0lDQWdJQ0FnSUZWU1RGTmxZWEpqYUZCaGNtRnRjeTVqWVd4c0tITndMQ0J6Y0M1ZmRYTndMbk5sWVhKamFDNXpiR2xqWlNneEtTazdYRzRnSUNBZ0lDQWdJSE53TG1Gd2NHVnVaQ0E5SUdGd2NHVnVaRHRjYmlBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0IyWlhKcFpubFRaV0Z5WTJoUVlYSmhiWE1nUFNCbWRXNWpkR2x2YmlBb2IySnFMQ0JEYkdGemN5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lTaHZZbW9nYVc1emRHRnVZMlZ2WmlCRGJHRnpjeWtwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hHNGdJQ0FnSUNBZ0lDQWdYQ0luYzJWaGNtTm9VR0Z5WVcxekp5QmhZMk5sYzNObFpDQnZiaUJoYmlCdlltcGxZM1FnZEdoaGRDQmNJaUFyWEc0Z0lDQWdJQ0FnSUNBZ1hDSmtiMlZ6SUc1dmRDQnBiWEJzWlcxbGJuUWdhVzUwWlhKbVlXTmxJRndpSUNzZ1EyeGhjM011Ym1GdFpWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmU3hjYmlBZ0lDQWdJSFZ3WjNKaFpHVkRiR0Z6Y3lBOUlHWjFibU4wYVc5dUlDaERiR0Z6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjJZWEpjYmlBZ0lDQWdJQ0FnSUNCRGJHRnpjMUJ5YjNSdklEMGdRMnhoYzNNdWNISnZkRzkwZVhCbExGeHVJQ0FnSUNBZ0lDQWdJSE5sWVhKamFGQmhjbUZ0Y3lBOUlHZFBVRVFvUTJ4aGMzTlFjbTkwYnl3Z0ozTmxZWEpqYUZCaGNtRnRjeWNwTEZ4dUlDQWdJQ0FnSUNBZ0lHaHlaV1lnUFNCblQxQkVLRU5zWVhOelVISnZkRzhzSUNkb2NtVm1KeWtzWEc0Z0lDQWdJQ0FnSUNBZ2MyVmhjbU5vSUQwZ1owOVFSQ2hEYkdGemMxQnliM1J2TENBbmMyVmhjbU5vSnlrc1hHNGdJQ0FnSUNBZ0lDQWdZM0psWVhSbFUyVmhjbU5vVUdGeVlXMXpYRzRnSUNBZ0lDQWdJRHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnpaV0Z5WTJoUVlYSmhiWE1nSmlZZ2MyVmhjbU5vSUNZbUlITmxZWEpqYUM1elpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCamNtVmhkR1ZUWldGeVkyaFFZWEpoYlhNZ1BTQmpjbVZoZEdWVFpXRnlZMmhRWVhKaGJYTkRjbVZoZEdVb1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqY21WaGRHVlRaV0Z5WTJoUVlYSmhiWE5RYjJ4c2RYUmxLSE5sWVhKamFDbGNiaUFnSUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnSUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBhV1Z6S0Z4dUlDQWdJQ0FnSUNBZ0lDQWdRMnhoYzNOUWNtOTBieXhjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FISmxaam9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdoeVpXWXVaMlYwTG1OaGJHd29kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSE53SUQwZ2RHaHBjeTVmYzJWaGNtTm9VR0Z5WVcxek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhSEpsWmk1elpYUXVZMkZzYkNoMGFHbHpMQ0IyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzQXBJSFZ3WkdGMFpWTmxZWEpqYUZCaGNtRnRjeWh6Y0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXRnlZMmc2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCblpYUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpXRnlZMmd1WjJWMExtTmhiR3dvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhOd0lEMGdkR2hwY3k1ZmMyVmhjbU5vVUdGeVlXMXpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWaGNtTm9Mbk5sZEM1allXeHNLSFJvYVhNc0lIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h6Y0NrZ2RYQmtZWFJsVTJWaGNtTm9VR0Z5WVcxektITndLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSE5sWVhKamFGQmhjbUZ0Y3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbVZ5YVdaNVUyVmhjbU5vVUdGeVlXMXpLSFJvYVhNc0lFTnNZWE56S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDl6WldGeVkyaFFZWEpoYlhNZ2ZId2dZM0psWVhSbFUyVmhjbU5vVUdGeVlXMXpLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dWVkpNVTJWaGNtTm9VR0Z5WVcxektIUm9hWE11YzJWaGNtTm9Mbk5zYVdObEtERXBLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnS0hOd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWlhKcFpubFRaV0Z5WTJoUVlYSmhiWE1vZEdocGN5d2dRMnhoYzNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM0psWVhSbFUyVmhjbU5vVUdGeVlXMXpLSFJvYVhNc0lITndLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnTzF4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNCMWNHZHlZV1JsUTJ4aGMzTW9TRlJOVEVGdVkyaHZja1ZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdhV1lnS0M5ZVpuVnVZM1JwYjI1OGIySnFaV04wSkM4dWRHVnpkQ2gwZVhCbGIyWWdWVkpNS1NBbUppQlZVa3d1Y0hKdmRHOTBlWEJsS1Z4dUlDQWdJQ0FnSUNCMWNHZHlZV1JsUTJ4aGMzTW9WVkpNS1R0Y2JpQWdJQ0I5SUdOaGRHTm9JQ2h0WldncElIdDlYRzRnSUgwb1QySnFaV04wS1NrN1hHNWNibjBvYzJWc1ppNVZVa3hUWldGeVkyaFFZWEpoYlhNdWNISnZkRzkwZVhCbExDQlBZbXBsWTNRcEtUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElITmxiR1l1VlZKTVUyVmhjbU5vVUdGeVlXMXpPMXh1SWl3aVpYaHdiM0owSUh0Y2JpQWdWR1Z0Y0d4aGRHVkJibTV2ZEdGMGFXOXVjeXdnUldScGRHOXlRMjl1ZEdWNGRFaGxiSEJsY2l3Z1RHOW5aMlZ5VTJWeWRtbGpaU3dnVUdWeWMyOXVZV3hwZW1GMGFXOXVVMlZ5ZG1salpWeHVmU0JtY205dElDY3VMM05sY25acFkyVW5PMXh1SWl3aVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1SlpuSmhiV1VnUFNBb0tTQTlQaUI3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1FtOXZiR1ZoYmloM2FXNWtiM2N1Ykc5allYUnBiMjRnSVQwOUlIZHBibVJ2ZHk1d1lYSmxiblF1Ykc5allYUnBiMjRwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHbHVSV1JwZEc5eUlEMGdLQ2tnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdhVzVKWm5KaGJXVW9LU0FtSmlBaGQybHVaRzkzTG14dlkyRjBhVzl1TG5ObFlYSmphQzVwYm1Oc2RXUmxjeWduYldkdWJGQnlaWFpwWlhjOWRISjFaU2NwSUNZbUlDRjNhVzVrYjNjdWJHOWpZWFJwYjI0dWMyVmhjbU5vTG1sdVkyeDFaR1Z6S0NkdFoyNXNVSEpsZG1sbGQwRnpWbWx6YVhSdmNqMTBjblZsSnlrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhVzVGWkdsMGIzSlFjbVYyYVdWM0lEMGdLQ2tnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdhVzVKWm5KaGJXVW9LU0FtSmlBb2QybHVaRzkzTG14dlkyRjBhVzl1TG5ObFlYSmphQzVwYm1Oc2RXUmxjeWduYldkdWJGQnlaWFpwWlhjOWRISjFaU2NwSUh4OElIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1elpXRnlZMmd1YVc1amJIVmtaWE1vSjIxbmJteFFjbVYyYVdWM1FYTldhWE5wZEc5eVBYUnlkV1VuS1NrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZtY21WemFDQTlJQ2dwSUQwK0lIdGNiaUFnYVdZZ0tHbHVSV1JwZEc5eUtDa2dKaVlnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbWx1Ym1WeVNGUk5UQzVwYm1SbGVFOW1LQ2M4SVMwdFkyMXpPbkJoWjJVbktTQStJQzB4S1NCN1hHNGdJQ0FnYVdZZ0tIZHBibVJ2ZHk1dFoyNXNVbVZtY21WemFDa2dlMXh1SUNBZ0lDQWdkMmx1Wkc5M0xtMW5ibXhTWldaeVpYTm9LQ2s3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gzYVc1a2IzY3VjR0Z5Wlc1MExtMW5ibXhTWldaeVpYTm9LU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjR0Z5Wlc1MExtMW5ibXhTWldaeVpYTm9LQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lITmxkRlJwYldWdmRYUW9jbVZtY21WemFDd2dNakF3S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxVbVZoWkhrZ1BTQW9LU0E5UGlCN1hHNGdJR2xtSUNocGJrbG1jbUZ0WlNncEtTQjdYRzRnSUNBZ2FXWWdLSGRwYm1SdmR5NXRaMjVzUm5KaGJXVlNaV0ZrZVNrZ2UxeHVJQ0FnSUNBZ2QybHVaRzkzTG0xbmJteEdjbUZ0WlZKbFlXUjVLQ2s3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gzYVc1a2IzY3VjR0Z5Wlc1MExtMW5ibXhHY21GdFpWSmxZV1I1S1NCN1hHNGdJQ0FnSUNCM2FXNWtiM2N1Y0dGeVpXNTBMbTFuYm14R2NtRnRaVkpsWVdSNUtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdsdVNXWnlZVzFsTEZ4dUlDQnBia1ZrYVhSdmNpeGNiaUFnY21WbWNtVnphQ3hjYmlBZ2FXNUZaR2wwYjNKUWNtVjJhV1YzTEZ4dUlDQnZia1p5WVcxbFVtVmhaSGxjYm4wN1hHNGlMQ0pjYm1aMWJtTjBhVzl1SUdWNFpXTW9abTVPWVcxbElEMGdKMnh2Wnljc0lHMWxjM05oWjJVc0lDNHVMbTl3ZEdsdmJtRnNVR0Z5WVcxektTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ1kyOXVjMjlzWlNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JpQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFdOdmJuTnZiR1ZjYmlBZ1kyOXVjMjlzWlZ0bWJrNWhiV1ZkS0cxbGMzTmhaMlVzSUc5d2RHbHZibUZzVUdGeVlXMXpLVHRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUd4dlp5QTlJQ2h0WlhOellXZGxMQ0F1TGk1dmNIUnBiMjVoYkZCaGNtRnRjeWtnUFQ0Z2UxeHVJQ0JsZUdWaktDZHNiMmNuTENCdFpYTnpZV2RsTENCdmNIUnBiMjVoYkZCaGNtRnRjeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNW1ieUE5SUNodFpYTnpZV2RsTENBdUxpNXZjSFJwYjI1aGJGQmhjbUZ0Y3lrZ1BUNGdlMXh1SUNCbGVHVmpLQ2RwYm1adkp5d2diV1Z6YzJGblpTd2diM0IwYVc5dVlXeFFZWEpoYlhNcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGRoY200Z1BTQW9iV1Z6YzJGblpTd2dMaTR1YjNCMGFXOXVZV3hRWVhKaGJYTXBJRDArSUh0Y2JpQWdaWGhsWXlnbmQyRnliaWNzSUcxbGMzTmhaMlVzSUc5d2RHbHZibUZzVUdGeVlXMXpLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCbGNuSnZjaUE5SUNodFpYTnpZV2RsTENBdUxpNXZjSFJwYjI1aGJGQmhjbUZ0Y3lrZ1BUNGdlMXh1SUNCbGVHVmpLQ2RsY25KdmNpY3NJRzFsYzNOaFoyVXNJRzl3ZEdsdmJtRnNVR0Z5WVcxektUdGNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdiRzluTEZ4dUlDQnBibVp2TEZ4dUlDQjNZWEp1TEZ4dUlDQmxjbkp2Y2x4dWZUdGNiaUlzSW1sdGNHOXlkQ0JGWkdsMGIzSkRiMjUwWlhoMFNHVnNjR1Z5SUdaeWIyMGdKeTR2UldScGRHOXlRMjl1ZEdWNGRFaGxiSEJsY2ljN1hHNXBiWEJ2Y25RZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6SUdaeWIyMGdKMEIxYm1kaGNDOTFjbXd0YzJWaGNtTm9MWEJoY21GdGN5YzdYRzVjYm1aMWJtTjBhVzl1SUdWdVkyOWtaVlpoYkhWbEtIWmhiQ2tnZTF4dUlDQnBaaUFvZEhsd1pXOW1JR1Z1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RtRnNPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQmxibU52WkdWVlVrbERiMjF3YjI1bGJuUW9kbUZzS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWkdWamIyUmxWbUZzZFdVb2RtRnNLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMllXdzdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHUmxZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaDJZV3dwTzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVMlZzWldOMFpXUldZWEpwWVc1MElEMGdLR052Ym5SbGJuUXNJSFJsYlhCc1lYUmxRVzV1YjNSaGRHbHZibk1wSUQwK0lIdGNiaUFnYVdZZ0tDRmpiMjUwWlc1MElIeDhJQ0YwWlcxd2JHRjBaVUZ1Ym05MFlYUnBiMjV6S1NCN1hHNGdJQ0FnY21WMGRYSnVJR052Ym5SbGJuUTdYRzRnSUgxY2JpQWdZMjl1YzNRZ1lXNXViM1JoZEdsdmJuTWdQU0IwWlcxd2JHRjBaVUZ1Ym05MFlYUnBiMjV6VzJOdmJuUmxiblJiSjBCd1lYUm9KMTFkTzF4dUlDQmpiMjV6ZENCdFlYUmphQ0E5SUdGdWJtOTBZWFJwYjI1ekxtMWhkR05vS0M5elpXeGxZM1JsWkZaaGNtbGhiblE5WENJb0xpc3BYQ0l2S1R0Y2JpQWdZMjl1YzNRZ2RtRnlhV0Z1ZENBOUlHMWhkR05vV3pGZE8xeHVJQ0J5WlhSMWNtNGdkbUZ5YVdGdWRDQTlQVDBnWTI5dWRHVnVkRnNuUUc1aGJXVW5YU0EvSUdOdmJuUmxiblFnT2lCamIyNTBaVzUwVzNaaGNtbGhiblJkTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHbHpVSEpsZG1sbGQwRnpWbWx6YVhSdmNpQTlJQ2h6WldGeVkyaFJkV1Z5ZVNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6WldGeVkyaFFZWEpoYlhNZ1BTQnVaWGNnVlZKTVUyVmhjbU5vVUdGeVlXMXpLSE5sWVhKamFGRjFaWEo1S1R0Y2JpQWdjbVYwZFhKdUlITmxZWEpqYUZCaGNtRnRjeTVuWlhRb0oyMW5ibXhRY21WMmFXVjNRWE5XYVhOcGRHOXlKeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVR1Z5YzI5dVlXeHBlbUYwYVc5dVVHRnlZVzF6SUQwZ0tITmxZWEpqYUZGMVpYSjVLU0E5UGlCN1hHNGdJR052Ym5OMElIQmhjbUZ0Y3lBOUlIdDlPMXh1SUNCcFppQW9JVVZrYVhSdmNrTnZiblJsZUhSSVpXeHdaWEl1YVc1SlpuSmhiV1VvS1NrZ2UxeHVJQ0FnSUM4dklFNXZkQ0JwYmlCUVlXZGxJRVZrYVhSdmNseHVJQ0FnSUhKbGRIVnliaUJ3WVhKaGJYTTdYRzRnSUgxY2JpQWdZMjl1YzNRZ2MyVmhjbU5vVUdGeVlXMXpJRDBnYm1WM0lGVlNURk5sWVhKamFGQmhjbUZ0Y3loelpXRnlZMmhSZFdWeWVTazdYRzRnSUdOdmJuTjBJR2wwWlhJZ1BTQnpaV0Z5WTJoUVlYSmhiWE11Wlc1MGNtbGxjeWdwTzF4dUlDQnNaWFFnY21WemRXeDBJRDBnYVhSbGNpNXVaWGgwS0NrN1hHNGdJSGRvYVd4bElDZ2hjbVZ6ZFd4MExtUnZibVVwSUh0Y2JpQWdJQ0JqYjI1emRDQnJaWGtnUFNCeVpYTjFiSFF1ZG1Gc2RXVmJNRjA3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCeVpYTjFiSFF1ZG1Gc2RXVmJNVjA3WEc0Z0lDQWdhV1lnS0d0bGVTNXpkR0Z5ZEhOWGFYUm9LQ2R3Y21WMmFXVjNKeWtwSUh0Y2JpQWdJQ0FnSUhCaGNtRnRjMXRyWlhsZElEMGdaR1ZqYjJSbFZtRnNkV1VvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYTjFiSFFnUFNCcGRHVnlMbTVsZUhRb0tUdGNiaUFnZlZ4dUlDQnBaaUFvYVhOUWNtVjJhV1YzUVhOV2FYTnBkRzl5S0hObFlYSmphRkYxWlhKNUtTa2dlMXh1SUNBZ0lIQmhjbUZ0Y3k1dFoyNXNVSEpsZG1sbGQwRnpWbWx6YVhSdmNpQTlJQ2QwY25WbEp6dGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQndZWEpoYlhNdWRtRnlhV0Z1ZEhNZ1BTQW5ZV3hzSnp0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnY0dGeVlXMXpPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhSdlUyVmhjbU5vVVhWbGNua2dQU0FvY0dGeVlXMXpLU0E5UGlCN1hHNGdJR052Ym5OMElIRjFaWEo1VTNSeWFXNW5JRDBnVDJKcVpXTjBMbXRsZVhNb2NHRnlZVzF6S1Z4dUlDQWdJQzV0WVhBb2EyVjVJRDArSUdBa2UydGxlWDA5Skh0bGJtTnZaR1ZXWVd4MVpTaHdZWEpoYlhOYmEyVjVYU2w5WUNsY2JpQWdJQ0F1YW05cGJpZ25KaWNwTzF4dUlDQnlaWFIxY200Z2NYVmxjbmxUZEhKcGJtY2dQeUJnUHlSN2NYVmxjbmxUZEhKcGJtZDlZQ0E2SUNjbk8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZaaGNtbGhiblFnUFNBb1kyOXVkR1Z1ZEN3Z2RHVnRjR3hoZEdWQmJtNXZkR0YwYVc5dWN5a2dQVDRnZTF4dUlDQnBaaUFvSVVWa2FYUnZja052Ym5SbGVIUklaV3h3WlhJdWFXNUZaR2wwYjNJb0tTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCamIyNTBaVzUwTzF4dUlDQjlYRzRnSUdsbUlDaGpiMjUwWlc1MElDWW1JR052Ym5SbGJuUmJKMnBqY2pwdGFYaHBibFI1Y0dWekoxMGdKaVlnWTI5dWRHVnVkRnNuYW1OeU9tMXBlR2x1Vkhsd1pYTW5YUzVwYm1Oc2RXUmxjeWduYldkdWJEcG9ZWE5XWVhKcFlXNTBKeWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVTJWc1pXTjBaV1JXWVhKcFlXNTBLR052Ym5SbGJuUXNJSFJsYlhCc1lYUmxRVzV1YjNSaGRHbHZibk1wTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJqYjI1MFpXNTBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JwYzFCeVpYWnBaWGRCYzFacGMybDBiM0lzWEc0Z0lHZGxkRkJsY25OdmJtRnNhWHBoZEdsdmJsQmhjbUZ0Y3l4Y2JpQWdkRzlUWldGeVkyaFJkV1Z5ZVN4Y2JpQWdaMlYwVm1GeWFXRnVkRnh1ZlR0Y2JpSXNJbHh1WTI5dWMzUWdRVU5VU1ZaQlZFbFBUbDlUVkVGVVZWTmZUazlVWDBGRFZFbFdRVlJGUkNBOUlEQTdYRzVqYjI1emRDQkJRMVJKVmtGVVNVOU9YMU5VUVZSVlUxOU5UMFJKUmtsRlJDQTlJREU3WEc1amIyNXpkQ0JCUTFSSlZrRlVTVTlPWDFOVVFWUlZVMTlCUTFSSlZrRlVSVVFnUFNBeU8xeHVYRzVqYjI1emRDQldRVXhWUlY5UVVrOURSVk5UVDFKVElEMGdlMXh1SUNCamIyNTBaVzUwT2lCblpYUkRiMjUwWlc1MFVHRjBhQ3hjYmlBZ1lYWmhhV3hoWW14bFEyOXRjRzl1Wlc1MGN6b2daMlYwUVhaaGFXeGhZbXhsUTI5dGNHOXVaVzUwY3l4Y2JpQWdjMmh2ZDBGa1pFSjFkSFJ2YmpvZ1kyRnVRV1JrVFc5eVpVTnZiWEJ2Ym1WdWRITXNYRzRnSUdGamRHbDJZWFJwYjI1VGRHRjBkWE02SUdkbGRFRmpkR2wyWVhScGIyNVRkR0YwZFhOY2JuMDdYRzVqYjI1emRDQlFRVWRGWDAxQlVDQTlJSHRjYmlBZ1kyOXVkR1Z1ZERvZ1d5ZEFjR0YwYUNjc0lDY25YU3hjYmlBZ1pHbGhiRzluT2lCYkoyUnBZV3h2Wnljc0lDY25MQ0JuWlhSV1lXeDFaVVp5YjIxUFltcGxZM1JkWEc1OU8xeHVZMjl1YzNRZ1FWSkZRVjlOUVZBZ1BTQjdYRzRnSUc1aGJXVTZJRnNuUUc1aGJXVW5MQ0FuSjEwc1hHNGdJR052Ym5SbGJuUTZJRkJCUjBWZlRVRlFMbU52Ym5SbGJuUXNYRzRnSUdScFlXeHZaem9nVUVGSFJWOU5RVkF1WkdsaGJHOW5MRnh1SUNCaGRtRnBiR0ZpYkdWRGIyMXdiMjVsYm5Sek9pQmJKMkYyWVdsc1lXSnNaVU52YlhCdmJtVnVkSE1uTENCYlhWMHNYRzRnSUhSNWNHVTZJRnNuZEhsd1pTY3NJQ2RzYVhOMEp5d2daMlYwVm1Gc2RXVkdjbTl0VDJKcVpXTjBYU3hjYmlBZ2JHRmlaV3c2SUZzbmRHbDBiR1VuTENBbkp5d2daMlYwVm1Gc2RXVkdjbTl0VDJKcVpXTjBYU3hjYmlBZ2FXNW9aWEpwZERvZ1d5ZHBibWhsY21sMFlXNWpaU2NzSUdaaGJITmxMQ0JuWlhSV1lXeDFaVVp5YjIxUFltcGxZM1JkTEZ4dUlDQnZjSFJwYjI1aGJEb2dXeWR2Y0hScGIyNWhiQ2NzSUdaaGJITmxMQ0JuWlhSV1lXeDFaVVp5YjIxUFltcGxZM1JkTEZ4dUlDQmpjbVZoZEdWa1FYSmxZVTV2WkdVNklGc25ZM0psWVhSbFFYSmxZVTV2WkdVbkxDQjBjblZsTENCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNSZExGeHVJQ0J6YUc5M1FXUmtRblYwZEc5dU9pQmJKMjFoZUVOdmJYQnZibVZ1ZEhNbkxDQjBjblZsWFN4Y2JpQWdjMmh2ZDA1bGQwTnZiWEJ2Ym1WdWRFRnlaV0U2SUZ0dWRXeHNMQ0IwY25WbFhTeGNiaUFnWkdWelkzSnBjSFJwYjI0NklGc25aR1Z6WTNKcGNIUnBiMjRuTENBbkp5d2daMlYwVm1Gc2RXVkdjbTl0VDJKcVpXTjBYU3hjYmlBZ1lXTjBhWFpoZEdsdmJsTjBZWFIxY3pvZ1cyNTFiR3dzSURCZFhHNTlPMXh1WEc1amIyNXpkQ0JEVDAxUVQwNUZUbFJmVFVGUUlEMGdlMXh1SUNCamIyNTBaVzUwT2lCUVFVZEZYMDFCVUM1amIyNTBaVzUwTEZ4dUlDQmthV0ZzYjJjNklGQkJSMFZmVFVGUUxtUnBZV3h2Wnl4Y2JpQWdiR0ZpWld3NklGc25kR2wwYkdVbkxDQW5KeXdnWjJWMFZtRnNkV1ZHY205dFQySnFaV04wWFN4Y2JpQWdaR1Z6WTNKcGNIUnBiMjQ2SUZzblpHVnpZM0pwY0hScGIyNG5MQ0FuSnl3Z1oyVjBWbUZzZFdWR2NtOXRUMkpxWldOMFhTeGNiaUFnWVdOMGFYWmhkR2x2YmxOMFlYUjFjem9nVzI1MWJHd3NJREJkWEc1OU8xeHVYRzVtZFc1amRHbHZiaUJuWlhSRGIyMXRaVzUwVTNSeWFXNW5LR1JoZEdFc0lHMWhjQ3dnZEdWdGNHeGhkR1ZFWldacGJtbDBhVzl1TENCamRYTjBiMjFRWVhKaGJYTXBJSHRjYmlBZ1kyOXVjM1FnY21WemRXeDBJRDBnVzEwN1hHNGdJRTlpYW1WamRDNXJaWGx6S0cxaGNDa3VabTl5UldGamFDaHJaWGtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRnRrWVhSaFMyVjVMQ0JrWldaaGRXeDBWbUZzZFdVc0lHZGxkRVJoZEdGR2JsMGdQU0J0WVhCYmEyVjVYVHRjYmlBZ0lDQmpiMjV6ZENCamIyNTBaVzUwVUhKdlkyVnpjMjl5SUQwZ1ZrRk1WVVZmVUZKUFEwVlRVMDlTVTF0clpYbGRPMXh1SUNBZ0lHeGxkQ0IyWVd4MVpTQTlJR1JsWm1GMWJIUldZV3gxWlR0Y2JpQWdJQ0JwWmlBb1kyOXVkR1Z1ZEZCeWIyTmxjM052Y2lrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCamIyNTBaVzUwVUhKdlkyVnpjMjl5S0dSaGRHRXNJR1JoZEdGTFpYa3NJSFJsYlhCc1lYUmxSR1ZtYVc1cGRHbHZiaXdnWTNWemRHOXRVR0Z5WVcxektUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHZGxkRVJoZEdGR2Jpa2dlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQm5aWFJFWVhSaFJtNG9kR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVMQ0JrWVhSaFMyVjVMQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pHRjBZU0FoUFNCdWRXeHNJQ1ltSUdSaGRHRkxaWGtnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhaaGJIVmxJRDBnWkdGMFlWdGtZWFJoUzJWNVhTQjhmQ0FuSnp0Y2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ2FYUmxiU0E5SUhzZ2EyVjVMQ0IyWVd4MVpTQjlPMXh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJwZEdWdExuWmhiSFZsSUNFOVBTQW5jM1J5YVc1bkp5QjhmQ0JwZEdWdExuWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFF1Y0hWemFDaGdKSHRyWlhsOVBWd2lKSHRwZEdWdExuWmhiSFZsZlZ3aVlDazdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdjbVZ6ZFd4MExtcHZhVzRvSnlBbktUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1oyVjBRWFpoYVd4aFlteGxRMjl0Y0c5dVpXNTBjeWhoY21WaExDQmtZWFJoUzJWNUxDQjBaVzF3YkdGMFpVUmxabWx1YVhScGIyNHBJSHRjYmlBZ2FXWWdLQ0YwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjRnZkh3Z0lYUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJsdGtZWFJoUzJWNVhTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBbkp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdWEyVjVjeWgwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjViWkdGMFlVdGxlVjBwTG0xaGNDaHJaWGtnUFQ0Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dVcyUmhkR0ZMWlhsZFcydGxlVjB1YVdRcExtcHZhVzRvSnl3bktUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1kyRnVRV1JrVFc5eVpVTnZiWEJ2Ym1WdWRITW9ZWEpsWVN3Z1pHRjBZVXRsZVN3Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUxDQmpkWE4wYjIxUVlYSmhiWE1wSUh0Y2JpQWdhV1lnS0NGMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI0Z2ZId2dkR1Z0Y0d4aGRHVkVaV1pwYm1sMGFXOXVMbTFoZUVOdmJYQnZibVZ1ZEhNZ1BUMGdiblZzYkNCOGZDQWhZM1Z6ZEc5dFVHRnlZVzF6SUh4OElHTjFjM1J2YlZCaGNtRnRjeTVqYjIxd2IyNWxiblJEYjNWdWRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHTjFjM1J2YlZCaGNtRnRjeTVqYjIxd2IyNWxiblJEYjNWdWRDQThJSFJsYlhCc1lYUmxSR1ZtYVc1cGRHbHZiaTV0WVhoRGIyMXdiMjVsYm5Sek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCblpYUldZV3gxWlVaeWIyMVBZbXBsWTNRb2IySnFMQ0JyWlhrc0lHUmxabUYxYkhSV1lXeDFaU2tnZTF4dUlDQnNaWFFnZG1Gc2RXVWdQU0J2WW1vZ0ppWWdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdhMlY1SUQ4Z2IySnFXMnRsZVYwZ09pQnVkV3hzTzF4dUlDQjJZV3gxWlNBOUlIWmhiSFZsSUQwOUlHNTFiR3dnUHlCa1pXWmhkV3gwVm1Gc2RXVWdPaUIyWVd4MVpUdGNiaUFnZG1Gc2RXVWdQU0IwZVhCbGIyWWdaR1ZtWVhWc2RGWmhiSFZsSUQwOVBTQW5ZbTl2YkdWaGJpY2dQeUJDYjI5c1pXRnVLSFpoYkhWbEtTQTZJSFpoYkhWbE8xeHVJQ0J5WlhSMWNtNGdkbUZzZFdVZ0lUMGdiblZzYkNBL0lIWmhiSFZsSURvZ1pHVm1ZWFZzZEZaaGJIVmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm5aWFJEYjI1MFpXNTBVR0YwYUNoa1lYUmhMQ0JyWlhrcElIdGNiaUFnWTI5dWMzUWdkbUZzZFdVZ1BTQmtZWFJoSUQ4Z1pHRjBZVnRyWlhsZElEb2diblZzYkR0Y2JpQWdMeThnVGs5VVJUb2dSVzF3ZEhrZ2MzUnlhVzVuSUdseklHRmpZMlZ3ZEdGaWJHVXVJRk52SUhkbElHNWxaV1FnWTJobFkyc2dkbUZzZFdVZ0lUMGdiblZzYkZ4dUlDQnlaWFIxY200Z2RtRnNkV1VnSVQwZ2JuVnNiQ0EvSUdCM1pXSnphWFJsT2lSN2RtRnNkV1Y5WUNBNklDY25PMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm5aWFJCWTNScGRtRjBhVzl1VTNSaGRIVnpLR1JoZEdFcElIdGNiaUFnYVdZZ0tDRmtZWFJoSUh4OElDRmtZWFJoV3lkdFoyNXNPbUZqZEdsMllYUnBiMjVUZEdGMGRYTW5YU0I4ZkNCa1lYUmhXeWR0WjI1c09tRmpkR2wyWVhScGIyNVRkR0YwZFhNblhTQTlQVDBnSjJaaGJITmxKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQkJRMVJKVmtGVVNVOU9YMU5VUVZSVlUxOU9UMVJmUVVOVVNWWkJWRVZFTzF4dUlDQjlYRzVjYmlBZ1kyOXVjM1FnYkdGemRFMXZaR2xtYVdWa0lEMGdaR0YwWVZzbmJXZHViRHBzWVhOMFRXOWthV1pwWldRblhTQS9JRzVsZHlCRVlYUmxLR1JoZEdGYkoyMW5ibXc2YkdGemRFMXZaR2xtYVdWa0oxMHBJRG9nYm5Wc2JEdGNiaUFnWTI5dWMzUWdiR0Z6ZEVGamRHbDJZWFJsWkNBOUlHUmhkR0ZiSjIxbmJtdzZiR0Z6ZEVGamRHbDJZWFJsWkNkZElEOGdibVYzSUVSaGRHVW9aR0YwWVZzbmJXZHViRHBzWVhOMFFXTjBhWFpoZEdWa0oxMHBJRG9nYm5Wc2JEdGNibHh1SUNCeVpYUjFjbTRnYkdGemRFMXZaR2xtYVdWa0lDWW1JR3hoYzNSQlkzUnBkbUYwWldRZ0ppWWdiR0Z6ZEUxdlpHbG1hV1ZrTG1kbGRGUnBiV1VvS1NBK0lHeGhjM1JCWTNScGRtRjBaV1F1WjJWMFZHbHRaU2dwSUQ4Z1FVTlVTVlpCVkVsUFRsOVRWRUZVVlZOZlRVOUVTVVpKUlVRZ09pQkJRMVJKVmtGVVNVOU9YMU5VUVZSVlUxOUJRMVJKVmtGVVJVUTdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUVlXZGxRMjl0YldWdWRGTjBjbWx1WnlBOUlDaHdZV2RsTENCMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI0cElEMCtJSHRjYmlBZ2NtVjBkWEp1SUdCamJYTTZjR0ZuWlNBa2UyZGxkRU52YlcxbGJuUlRkSEpwYm1jb2NHRm5aU3dnVUVGSFJWOU5RVkFzSUhSbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlsOVlEdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSQmNtVmhRMjl0YldWdWRGTjBjbWx1WnlBOUlDaGhjbVZoTENCMFpXMXdiR0YwWlVSbFptbHVhWFJwYjI0c0lHTnZiWEJ2Ym1WdWRFTnZkVzUwS1NBOVBpQjdYRzRnSUdOdmJuTjBJR04xYzNSdmJWQmhjbUZ0Y3lBOUlIc2dZMjl0Y0c5dVpXNTBRMjkxYm5RZ2ZUdGNiaUFnWTI5dWMzUWdZWEpsWVZSbGJYQnNZWFJsUkdWbWFXNXBkR2x2YmlBOUlIUmxiWEJzWVhSbFJHVm1hVzVwZEdsdmJpQW1KaUIwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjR1WVhKbFlYTWdQeUIwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjR1WVhKbFlYTmJZWEpsWVZzblFHNWhiV1VuWFYwZ09pQjdmVHRjYmlBZ2NtVjBkWEp1SUdCamJYTTZZWEpsWVNBa2UyZGxkRU52YlcxbGJuUlRkSEpwYm1jb1lYSmxZU3dnUVZKRlFWOU5RVkFzSUdGeVpXRlVaVzF3YkdGMFpVUmxabWx1YVhScGIyNHNJR04xYzNSdmJWQmhjbUZ0Y3lsOVlEdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSRGIyMXdiMjVsYm5SRGIyMXRaVzUwVTNSeWFXNW5JRDBnS0dOdmJYQnZibVZ1ZEN3Z2RHVnRjR3hoZEdWRVpXWnBibWwwYVc5dUtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCZ1kyMXpPbU52YlhCdmJtVnVkQ0FrZTJkbGRFTnZiVzFsYm5SVGRISnBibWNvWTI5dGNHOXVaVzUwTENCRFQwMVFUMDVGVGxSZlRVRlFMQ0IwWlcxd2JHRjBaVVJsWm1sdWFYUnBiMjRwZldBN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHZGxkRUZ5WldGRGIyMXRaVzUwVTNSeWFXNW5MRnh1SUNCblpYUkRiMjF3YjI1bGJuUkRiMjF0Wlc1MFUzUnlhVzVuTEZ4dUlDQm5aWFJRWVdkbFEyOXRiV1Z1ZEZOMGNtbHVaMXh1ZlR0Y2JpSXNJbVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVkdWdGNHeGhkR1ZCYm01dmRHRjBhVzl1Y3lCOUlHWnliMjBnSnk0dlZHVnRjR3hoZEdWQmJtNXZkR0YwYVc5dWN5YzdYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUVWa2FYUnZja052Ym5SbGVIUklaV3h3WlhJZ2ZTQm1jbTl0SUNjdUwwVmthWFJ2Y2tOdmJuUmxlSFJJWld4d1pYSW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTWIyZG5aWEpUWlhKMmFXTmxJSDBnWm5KdmJTQW5MaTlNYjJkblpYSlRaWEoyYVdObEp6dGNibVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVUdWeWMyOXVZV3hwZW1GMGFXOXVVMlZ5ZG1salpTQjlJR1p5YjIwZ0p5NHZVR1Z5YzI5dVlXeHBlbUYwYVc5dVUyVnlkbWxqWlNjN1hHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgRWRpdGFibGVQYWdlLCBFZGl0YWJsZUFyZWEsIEVkaXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0IHsgRWRpdG9yQ29udGV4dCwgUmVuZGVyZXJDb250ZXh0LCBFZGl0b3JDb250ZXh0SGVscGVyLCBDb21wb25lbnRIZWxwZXIsIFBlcnNvbmFsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuL3V0aWwnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
});

const mgnlReactEditor$1 = /*@__PURE__*/ getDefaultExportFromCjs(mgnlReactEditor);

var reactEditor = createCommonjsModule(function (module) {
  'use strict';

  if ('development' === 'production') {
    module.exports = mgnlReactEditor_min;
  } else {
    module.exports = mgnlReactEditor;
  }
});

var api = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getMgnlApp = void 0;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  const { REACT_APP_MGNL_API_APP, REACT_APP_MGNL_HOST } = process.env;

  const evaluateNode = res => {
    let listItemArr = [];

    for (const node in res['@nodes']) {
      const nodeNew = res[res['@nodes'][node]];

      if (nodeNew['@nodes'].length > 0) {
        listItemArr.push({
          '@name': nodeNew['@name'],
          'data': evaluateNode(nodeNew),
        });
      } else listItemArr.push(nodeNew);
    }

    return listItemArr;
  };

  const calulateNodeData = content => {
    let listItemArr = [],
      obj = {};
    listItemArr = evaluateNode(content);
    listItemArr.map(item => {
      obj[item['@name']] = item;

      switch (item['@name']) {
        case 'listItem1': {
          obj[item['@name']].title = content.title1;
          break;
        }

        case 'listItem2': {
          obj[item['@name']].title = content.title2;
          break;
        }

        case 'listItem3': {
          obj[item['@name']].title = content.title3;
          break;
        }

        default:
          obj[item['@name']].title = '';
      }
    });
    return obj;
  };

  const getMgnlApp = async config => {
    const { host, endpoint, country, lang, site, resType } = config;
    console.log(
      'mgnlURL',
      ''
        .concat(host || REACT_APP_MGNL_HOST)
        .concat(REACT_APP_MGNL_API_APP)
        .concat(endpoint, '/')
        .concat(site, '-')
        .concat(country, '/setting?lang=')
        .concat(lang),
    );
    const content = await fetch(
      ''
        .concat(host || REACT_APP_MGNL_HOST)
        .concat(REACT_APP_MGNL_API_APP)
        .concat(endpoint, '/')
        .concat(site, '-')
        .concat(country, '/setting?lang=')
        .concat(lang),
    ).then(r => r.json());
    return resType != '' && resType == 'JCR' ? calulateNodeData(content) : _objectSpread({}, content);
  };

  exports.getMgnlApp = getMgnlApp;
});

const index$1 = /*@__PURE__*/ getDefaultExportFromCjs(api);

var dist = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'getPage', {
    enumerable: true,
    get: function get() {
      return pages.getPage;
    },
  });
  Object.defineProperty(exports, 'App', {
    enumerable: true,
    get: function get() {
      return pages.App;
    },
  });
  Object.defineProperty(exports, 'EditableArea', {
    enumerable: true,
    get: function get() {
      return reactEditor.EditableArea;
    },
  });
  Object.defineProperty(exports, 'EditablePage', {
    enumerable: true,
    get: function get() {
      return reactEditor.EditablePage;
    },
  });
  Object.defineProperty(exports, 'getMgnlApp', {
    enumerable: true,
    get: function get() {
      return api.getMgnlApp;
    },
  });
  exports.Demotext = void 0;

  var _react = _interopRequireDefault(react$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  const Demotext = props => {
    return /*#__PURE__*/ _react.default.createElement('div', null, ' Your text - ', props.text);
  };

  exports.Demotext = Demotext;
});

const index = /*@__PURE__*/ getDefaultExportFromCjs(dist);

const avonFooterCss =
  ':host{display:block;width:100%}:host footer{background-color:#fff;padding:2.5rem 0 1.5rem;color:#546264;font-family:"Montserrat", sans-serif;font-size:16px;line-height:24px;box-shadow:gray 0px -10px 10px -10px;clear:both;position:relative;margin-top:auto;width:100%}:host footer.dark{color:#737373;background-color:#26272b}:host footer.dark a{color:#737373}:host footer.dark h4{color:#fff}:host hr{border-top-color:#f1f1f1;opacity:0.5}:host h4{color:#546264;text-transform:uppercase;margin-top:0.25rem;letter-spacing:2px}:host a{color:#546264;text-decoration:none}:host .container{box-sizing:border-box;width:100%;max-width:1320px;padding-right:var(--bs-gutter-x, 1.5rem);padding-left:var(--bs-gutter-x, 1.5rem);margin-right:auto;margin-left:auto}:host .row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;box-sizing:border-box;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) * -0.5);margin-left:calc(var(--bs-gutter-x) * -0.5)}:host .row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * 0.5);padding-left:calc(var(--bs-gutter-x) * 0.5);margin-top:var(--bs-gutter-y)}:host .col{box-sizing:border-box;flex:0 0 auto;width:33.33333333%}:host .footer-links{padding-left:0;list-style:none}:host .imgWithText{display:flex;flex-direction:row;align-items:center;color:#546264;font-size:1rem}:host .imgWithText div:nth-child(2){padding-left:1rem}';

const AvonFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isDark = false;
  }
  async componentWillLoad() {
    if (this.content) this.data = JSON.parse(decodeURIComponent(this.content));
    else {
      this.data = await dist.getMgnlApp({
        lang: 'en',
        country: 'GB',
        endpoint: 'footer',
        site: 'avon',
        resType: 'JCR',
      });
      this.content = encodeURIComponent(JSON.stringify(this.data));
    }
  }
  render() {
    var _a, _b, _c, _d, _e;
    return h(
      'footer',
      { class: `site-footer ${this.isDark ? 'dark' : ''}` },
      h(
        'div',
        { class: 'container' },
        h(
          'div',
          { class: 'row' },
          ['listItem1', 'listItem2', 'listItem3'].map(key => {
            var _a, _b;
            return h(
              'div',
              { class: 'col', key: key },
              h('h4', null, (_a = this.data[key]) === null || _a === void 0 ? void 0 : _a.title),
              h(
                'ul',
                { class: 'footer-links' },
                (_b = this.data[key]) === null || _b === void 0
                  ? void 0
                  : _b.data.map(item =>
                      h(
                        'li',
                        { key: item['@name'] },
                        h(
                          'ui-link',
                          { link: item.listItemURL },
                          h('div', { class: 'imgWithText' }, item.imageUrl && h('ui-img', { src: item.imageUrl, width: '32', height: '32' }), h('div', null, item.listItemName)),
                        ),
                      ),
                    ),
              ),
            );
          }),
        ),
        h('hr', null),
      ),
      h(
        'div',
        { class: 'container' },
        h(
          'div',
          { class: 'row' },
          h('div', { class: 'col' }, h('small', null, (_a = this.data.footerBaseSection) === null || _a === void 0 ? void 0 : _a.copyRightText)),
          h(
            'div',
            { class: 'col' },
            h(
              'ui-link',
              { link: (_b = this.data.footerBaseSection) === null || _b === void 0 ? void 0 : _b.helpURL, color: '#546264', fontsize: '1rem' },
              h('small', null, (_c = this.data.footerBaseSection) === null || _c === void 0 ? void 0 : _c.helpText),
            ),
          ),
          h(
            'div',
            { class: 'col' },
            h(
              'ui-link',
              { link: (_d = this.data.footerBaseSection) === null || _d === void 0 ? void 0 : _d.tncURL, color: '#546264', fontsize: '1rem' },
              h('small', null, (_e = this.data.footerBaseSection) === null || _e === void 0 ? void 0 : _e.tncText),
            ),
          ),
        ),
      ),
    );
  }
};
AvonFooter.style = avonFooterCss;

export { AvonFooter as avon_footer };
