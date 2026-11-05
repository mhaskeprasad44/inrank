const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const reactSnippet = `
              <!-- Interactive React Component: Growth & ROI Forecaster -->
              <div class="mt-16" data-react-component="GrowthRoiCalculator"></div>
`;

// 1. index.html
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
if (!indexHtml.includes('data-react-component="GrowthRoiCalculator"')) {
  indexHtml = indexHtml.replace(
    'Request Custom Quote ❯\n                  </a>\n                </div>\n              </div>\n\n            </div>\n          </section>',
    `Request Custom Quote ❯\n                  </a>\n                </div>\n              </div>\n${reactSnippet}\n            </div>\n          </section>`
  );
  // Also check CRLF version
  if (!indexHtml.includes('data-react-component="GrowthRoiCalculator"')) {
    indexHtml = indexHtml.replace(
      'Request Custom Quote ❯\r\n                  </a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </section>',
      `Request Custom Quote ❯\r\n                  </a>\r\n                </div>\r\n              </div>\r\n${reactSnippet}\r\n            </div>\r\n          </section>`
    );
  }
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Inserted React component into index.html');
} else {
  console.log('React component already present in index.html');
}

// 2. pricing.html
const pricingPath = path.join(rootDir, 'pricing.html');
let pricingHtml = fs.readFileSync(pricingPath, 'utf8');
if (!pricingHtml.includes('data-react-component="GrowthRoiCalculator"')) {
  pricingHtml = pricingHtml.replace(
    'Request Custom Quote ❯\n                  </a>\n                </div>\n              </div>\n\n            </div>\n          </section>',
    `Request Custom Quote ❯\n                  </a>\n                </div>\n              </div>\n${reactSnippet}\n            </div>\n          </section>`
  );
  if (!pricingHtml.includes('data-react-component="GrowthRoiCalculator"')) {
    pricingHtml = pricingHtml.replace(
      'Request Custom Quote ❯\r\n                  </a>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </section>',
      `Request Custom Quote ❯\r\n                  </a>\r\n                </div>\r\n              </div>\r\n${reactSnippet}\r\n            </div>\r\n          </section>`
    );
  }
  fs.writeFileSync(pricingPath, pricingHtml, 'utf8');
  console.log('Inserted React component into pricing.html');
} else {
  console.log('React component already present in pricing.html');
}

