import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'newline-before-return': 2,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'import-helpers/order-imports': [
        2,
        {
          newlinesBetween: 'always',

          groups: [
            ['/^next/', 'module'],
            '/^@/components/',
            '/^@/lib/',
            '/^@/queries/',
            '/^@/screens/',
            '/^@/ui/',
            ['parent', 'sibling', 'index'],
          ],

          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
        },
      ],

      'no-console': [
        2,
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
    },
  },
];

export default eslintConfig;
