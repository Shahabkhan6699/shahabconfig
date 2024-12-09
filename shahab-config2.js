{
  "log": {
    "level": "warn",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "tag": "dns-remote",
        "address": "tcp://9.9.9.9",
        "address_resolver": "dns-direct"
      },
      {
        "tag": "dns-trick-direct",
        "address": "https://sky.rethinkdns.com/",
        "detour": "direct-fragment"
      },
      {
        "tag": "dns-direct",
        "address": "9.9.9.9",
        "address_resolver": "dns-local",
        "detour": "direct"
      },
      {
        "tag": "dns-local",
        "address": "local",
        "detour": "direct"
      },
      {
        "tag": "dns-block",
        "address": "rcode://success"
      }
    ],
    "rules": [
      {
        "domain": "connectivitycheck.gstatic.com",
        "server": "dns-remote",
        "rewrite_ttl": 3000
      },
      {
        "domain_suffix": ".ir",
        "server": "dns-direct"
      },
      {
        "rule_set": [
          "geoip-ir",
          "geosite-ir"
        ],
        "server": "dns-direct"
      }
    ],
    "final": "dns-remote",
    "static_ips": {
      "sky.rethinkdns.com": [
        "104.17.147.22",
        "104.17.148.22",
        "2a06:98c1:3122::",
        "2a06:98c1:3123::",
        "188.114.99.0",
        "188.114.98.0"
      ]
    },
    "independent_cache": true
  },
  "inbounds": [
    {
      "type": "tun",
      "tag": "tun-in",
      "mtu": 9000,
      "inet4_address": "172.19.0.1/28",
      "auto_route": true,
      "strict_route": true,
      "endpoint_independent_nat": true,
      "stack": "gvisor",
      "sniff": true,
      "domain_strategy": "ipv4_only"
    },
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "127.0.0.1",
      "listen_port": 12334,
      "sniff": true,
      "sniff_override_destination": true,
      "domain_strategy": "ipv4_only"
    },
    {
      "type": "direct",
      "tag": "dns-in",
      "listen": "127.0.0.1",
      "listen_port": 16450
    }
  ],
  "outbounds": [
    {
      "type": "selector",
      "tag": "select",
      "outbounds": [
        "auto",
        "United+States § 0",
        "United+States § 1",
        "United+States § 2",
        "United+States § 3",
        "United+States § 4",
        "United+Kingdom § 5",
        "Canada § 6",
        "United+States § 7",
        "United+States § 8",
        "United+States § 9",
        "United+States § 10",
        "United+States § 11",
        "United+States § 12",
        "Costa+Rica § 13",
        "United+States § 14",
        "Germany § 15",
        "United+States § 16",
        "United+States § 17",
        "United+Kingdom § 18",
        "United+States § 19",
        "United+States § 20",
        "United+States § 21",
        "United+States § 22",
        "United+States § 23",
        "United+States § 24",
        "United+States § 25",
        "United+States § 26",
        "Sweden § 27",
        "United+States § 28",
        "Germany § 29",
        "United+States § 30",
        "United+States § 31",
        "United+States § 32",
        "United+States § 33",
        "United+States § 34",
        "Germany § 35",
        "United+States § 36",
        "United+States § 37",
        "Sweden § 38",
        "United+States § 39",
        "United+States § 40",
        "United+States § 41",
        "United+States § 42",
        "United+States § 43",
        "United+States § 44",
        "United+States § 45",
        "United+States § 46",
        "United+States § 47",
        "United+States § 48",
        "United+States § 49",
        "Costa+Rica § 50",
        "United+States § 51",
        "Sweden § 52",
        "United+States § 53",
        "Japan § 54",
        "United+States § 55",
        "United+Kingdom § 56",
        "United+States § 57",
        "United+States § 58",
        "United+States § 59",
        "United+States § 60",
        "United+States § 61",
        "United+States § 62",
        "United+States § 63",
        "United+States § 64",
        "United+Kingdom § 65",
        "United+States § 66",
        "United+States § 67",
        "United+States § 68",
        "United+Kingdom § 69",
        "United+States § 70",
        "United+States § 71",
        "United+States § 72",
        "United+States § 73",
        "Sweden § 74"
      ],
      "default": "auto",
      "interrupt_exist_connections": true
    },
    {
      "type": "urltest",
      "tag": "auto",
      "outbounds": [
        "United+States § 0",
        "United+States § 1",
        "United+States § 2",
        "United+States § 3",
        "United+States § 4",
        "United+Kingdom § 5",
        "Canada § 6",
        "United+States § 7",
        "United+States § 8",
        "United+States § 9",
        "United+States § 10",
        "United+States § 11",
        "United+States § 12",
        "Costa+Rica § 13",
        "United+States § 14",
        "Germany § 15",
        "United+States § 16",
        "United+States § 17",
        "United+Kingdom § 18",
        "United+States § 19",
        "United+States § 20",
        "United+States § 21",
        "United+States § 22",
        "United+States § 23",
        "United+States § 24",
        "United+States § 25",
        "United+States § 26",
        "Sweden § 27",
        "United+States § 28",
        "Germany § 29",
        "United+States § 30",
        "United+States § 31",
        "United+States § 32",
        "United+States § 33",
        "United+States § 34",
        "Germany § 35",
        "United+States § 36",
        "United+States § 37",
        "Sweden § 38",
        "United+States § 39",
        "United+States § 40",
        "United+States § 41",
        "United+States § 42",
        "United+States § 43",
        "United+States § 44",
        "United+States § 45",
        "United+States § 46",
        "United+States § 47",
        "United+States § 48",
        "United+States § 49",
        "Costa+Rica § 50",
        "United+States § 51",
        "Sweden § 52",
        "United+States § 53",
        "Japan § 54",
        "United+States § 55",
        "United+Kingdom § 56",
        "United+States § 57",
        "United+States § 58",
        "United+States § 59",
        "United+States § 60",
        "United+States § 61",
        "United+States § 62",
        "United+States § 63",
        "United+States § 64",
        "United+Kingdom § 65",
        "United+States § 66",
        "United+States § 67",
        "United+States § 68",
        "United+Kingdom § 69",
        "United+States § 70",
        "United+States § 71",
        "United+States § 72",
        "United+States § 73",
        "Sweden § 74"
      ],
      "url": "http://connectivitycheck.gstatic.com/generate_204",
      "interval": "10m0s",
      "tolerance": 1,
      "idle_timeout": "30m0s",
      "interrupt_exist_connections": true
    },
    {
      "type": "trojan",
      "tag": "United+States § 0",
      "server": "104.16.45.220",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 1",
      "server": "172.67.171.49",
      "server_port": 443,
      "password": "03793bc4-e0e9-4527-b0ff-8fe1ce7aaf3d",
      "tls": {
        "enabled": true,
        "server_name": "us1.trojanvpn.xyz",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "us1.trojanvpn.xyz"
        },
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 2",
      "server": "172.64.35.192",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "tb.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "tb.promote.icu"
        },
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 3",
      "server": "104.16.72.34",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 4",
      "server": "172.64.235.138",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+Kingdom § 5",
      "server": "52.56.222.154",
      "server_port": 22222,
      "password": "telegram-id-privatevpns",
      "tls": {
        "enabled": true,
        "server_name": "trojan.burgerip.co.uk",
        "alpn": "http/1.1",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "Canada § 6",
      "server": "15.157.245.45",
      "server_port": 22222,
      "password": "telegram-id-directvpn",
      "tls": {
        "enabled": true,
        "server_name": "trojan.burgerip.co.uk",
        "alpn": "http/1.1",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 7",
      "server": "162.159.44.207",
      "server_port": 443,
      "password": "blue2024",
      "transport": {
        "type": "ws",
        "headers": {
          "Host": "tb.promote.icu"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 8",
      "server": "54.163.78.174",
      "server_port": 22222,
      "password": "telegram-id-directvpn",
      "tls": {
        "enabled": true,
        "server_name": "trojan.burgerip.co.uk",
        "alpn": "http/1.1",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 9",
      "server": "104.17.23.86",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "headers": {
          "Host": "td.promote.icu"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 10",
      "server": "108.162.193.55",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 11",
      "server": "104.24.92.234",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 12",
      "server": "172.67.67.64",
      "server_port": 443,
      "password": "WOeXShhJpL",
      "tls": {
        "enabled": true,
        "server_name": "09jzus.zdzdzd.xyz",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/juzigongyi",
        "headers": {
          "Host": "09jzus.zdzdzd.xyz"
        },
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "Costa+Rica § 13",
      "server": "190.93.246.178",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 14",
      "server": "104.18.200.131",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "Germany § 15",
      "server": "63.176.232.107",
      "server_port": 22222,
      "password": "telegram-id-privatevpns",
      "tls": {
        "enabled": true,
        "server_name": "trojan.burgerip.co.uk",
        "alpn": "http/1.1",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 16",
      "server": "104.19.214.179",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "randomized"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 17",
      "server": "172.64.35.155",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "tb.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "tb.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+Kingdom § 18",
      "server": "18.133.41.102",
      "server_port": 22222,
      "password": "telegram-id-privatevpns",
      "tls": {
        "enabled": true,
        "server_name": "trojan.burgerip.co.uk",
        "alpn": "http/1.1",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 19",
      "server": "104.17.49.240",
      "server_port": 443,
      "password": "WOeXShhJpL",
      "tls": {
        "enabled": true,
        "server_name": "09jzus.zdzdzd.xyz",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/juzigongyi",
        "headers": {
          "Host": "09jzus.zdzdzd.xyz"
        },
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 20",
      "server": "162.159.44.155",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "tb.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "tb.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 21",
      "server": "104.17.191.37",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 22",
      "server": "104.26.12.31",
      "server_port": 443,
      "password": "blue2024",
      "transport": {
        "type": "ws",
        "headers": {
          "Host": "tb.promote.icu"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 23",
      "server": "108.162.195.192",
      "server_port": 443,
      "password": "blue2024",
      "transport": {
        "type": "ws",
        "headers": {
          "Host": "tb.promote.icu"
        }
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 24",
      "server": "104.17.45.90",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 25",
      "server": "104.16.10.12",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "td.promote.icu"
        },
        "max_early_data": 2560,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "trojan",
      "tag": "United+States § 26",
      "server": "104.16.214.5",
      "server_port": 443,
      "password": "blue2024",
      "tls": {
        "enabled": true,
        "server_name": "td.promote.icu",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "tran
