var nock = require('nock');

nock('https://api.github.com:443')
  .get('/repos/marcboscher/cctest/issues?state=all&page=1&per_page=100')
  .reply(200, ["1f8b0800000000000003ed9b6d73aa3814c7bfca0eafdb0b81a098999dfd12ee9bbdee3801a2a2181c12ec769d7ef73d09a088d65681d94e6ffaa20f34f9070fe49793734e7e1eac224f2d62ada4dc0962db7497fc58267255843fa26c6be76c97097b4bf328cc44b462b91d459209692742144cd881f564a53464a99877d3b14b9583cde996bd812a8cbe655c76d6ad754092edfb102c55406e25b769eb53372c77db66496c11dfc38e8782f193c58b6dc8728b044f964c64cae079b0ed4ebec2208550ff385869b64c385c6fc8c27f950c4263ecfbd095eea9a479fb39e88ba27aa64a2dcab8043be8c75bd855ef3ff6bf7ba0b7cc2b11256ca9e16fbd1c4aed","ece5b8c728d07691a569f6021aed7b3e7f072f86b18f1d8f22095f3e26021d0f7626e1cd9eab71d49bb74cc447afdde52de94e075bfd9827b1921160f79cc5f7de56d50d6eea85c3fd1cf414d47a4528a23cd9c924e3775becac338865f992f2e45ffa90187416a0a1d970efc7d39da0f367e6e2a595cb5e077b97277b1abd2ab3e42c62c91eecfc9862ab3b08cad79d9a807faa8907564f249bd378ab26df82a682bdd5c0b3c8cfbff55396aa79b6631c9aa759b46130777453989242244bcea0012fd2f4c9da2629c033e3c70b473a1107909733108be75482a0eb20ffd941cf8e3f4598f80ef1277fc100c52efeb04d9466a29229870db3f81524a3fd3f7bebeda923f2c7ea63f680fcf140c81fdb3d237f6c7746beb259897c0f611f7927e403fd6be4bfc0b2fb1b4c5449c5464d11837efb920006fdf712d7a0bf7475dace0a2cac672bc71744bf37751de24e88e7df44bf4f5c4cf058b5790ffdddb13fea09fba381b03fea1bfba3eed85736d3d847c89be0113a617f74c2fe62b130b0d79b918b196a606f60ffddfc7ce5fcb51d7dfc8c5cede84f881f108c6ed27e429c8078ee2dda53b11074b15ead57330ebfc09ff05308fd4dd47fcef88c775f16fc9e96057fa065c1ef7b59f0bb2f0bca66a76501379605bf1100825da3d9039865c1847f4eb1e75f2bfc73be2ab89af8edf0cfb536c3ed01704fb0c703c11ef70d7bdc1df6ca6625ec1de440ece7b407c027d8c7716c606ff60026d6df4834fe8ab0c75304be3dc4fa7530e73aeccfdb0c077b950fec23ceef0d047baf6fd87bdd61af6c56c1de99787e23b50bbbbe3ace1f459181bd81bd81fdf784fda3e9d5636e58d86e57f436b52afc56640a2628c01066a84b4edc1397c2308446313b5619d4596b1daeca4c194aabdac594a1dc5dfd6172913de62255c9c9bcacc3832ab063eeafbe020525ade294eb61e7d29ff408c61ff99c759bb860f30cea61cae29296070af531378b5aca88851ed44504399f1d743847b7336dab5a48772047d7eddbd175bb3bbaca66b5a31b04b851d072b1a098321693d934158c75f9f4378e6aa825a855c1d8803d1a11ef4654633c753ce240e44397babc077b9dbc14b47bda1275f5b02be6a381988ffa663eeace7c65b313f3dd06f3e1c9d7c10d4a293433cc37cc37ccffa2cc7f34405106836dc65794474c1dce8199ae8eeba8e32a6717a32c55e1022bc0e18885d6db1d75f2e6a4cbd9692b5301672ae0fec70ab8c6799547a9d108457676ba9a5a57c29a9050afc39a171e89096bbe73c2d354dd9ad375d5d1deafb137ed35ace912e7c6a613a29070b8c2a9ce577c3eac09876d6fef74ddab67f5f46ed89d4c910f2702aaddf07b3b5d1a8bf52adea80a5ec8cb84e18c43da18be5405ef7abdde6c36334ec51236c3aa8e5717f7829ff51fecdf5b44cf3d0000"], { server: 'GitHub.com',
  date: 'Wed, 07 Jan 2015 15:49:42 GMT',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'close',
  status: '200 OK',
  'x-ratelimit-limit': '5000',
  'x-ratelimit-remaining': '4993',
  'x-ratelimit-reset': '1420649327',
  'cache-control': 'private, max-age=60, s-maxage=60',
  etag: '"2e730fdcc3e335b84bd5d98a76b13499"',
  'x-oauth-scopes': 'repo',
  'x-accepted-oauth-scopes': '',
  vary: 'Accept, Authorization, Cookie, X-GitHub-OTP',
  'x-github-media-type': 'github.v3; format=json',
  'x-xss-protection': '1; mode=block',
  'x-frame-options': 'deny',
  'content-security-policy': 'default-src \'none\'',
  'access-control-allow-credentials': 'true',
  'access-control-expose-headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval',
  'access-control-allow-origin': '*',
  'x-github-request-id': '607FE41B:6ADB:1D76BC:54AD5596',
  'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
  'x-content-type-options': 'nosniff',
  'x-served-by': '01d096e6cfe28f8aea352e988c332cd3',
  'content-encoding': 'gzip' });