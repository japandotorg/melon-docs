<?php

if (!defined('ROOT_PATH')) {
    define('ROOT_PATH', __DIR__ . '/../');
}

$config = Config::get('postgresql');

return [
    'paths' => [
        'migrations' => __DIR__,
    ],
    'environments' => [
        'docs' => [
            'adapter' => 'postgresql',
            'host' => $config['db_host'],
            'name' => $config['db_name'],
            'user' => $config['db_username'],
            'password' => $config['db_password'],
            'port' => $config['db_port'],
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'default_migration_table' => 'docs_log',
        ],
    ],
];
   