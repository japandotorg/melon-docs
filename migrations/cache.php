<?php
    include_once("config.php");

    function write_cache($content) {
        $cache_path = dirname(__FILE__).'./cache/cached.html';

        @mkdir(dirname($cache_path), 0755);
        file_put_contents($cache_path, $content);

        return $content;
    }

    if (defined("CACHE_LIFETIME") && intval(CACHE_LIFETIME) > 0) {
        $cache_path = dirname(__FILE__).'/cache/cached.html';

        if (
            file_exists($cache_path)
            && filemtime($cache_path) + intval(CACHE_LIFETIME) > time()
            && filemtime($cache_path) > filemtime(dirname(__FILE__).'/config.php')
        ) {
            @$cache = file_get_contents($cache_path);

            if ($cache !== false) {
                echo $cache;
                exit;
            }
        } else {
            ob_start('write_cache');
        }
    }
?>
