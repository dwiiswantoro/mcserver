addSubDomain({
  description: 'tess', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'mcserver', // desired subdomain name
  owner: {
    repo: 'https://github.com/dwiiswantoro/',
    email: 'kocheng.kayang@gmail.com',
  },
  record: {
    //CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    //TXT: ['list', 'of', 'required', 'txt', 'records'],
    A: ['202.152.148.82'],
    //AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    //NS: ['list', 'of', 'nameservers'],
  },
  proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
