<?php
    declare(strict_types=1);

    use Phinx\Db\Adapter\MysqlAdapter;
    use Phinx\Migration\AbstractMigration;

    final class CustomPage extends AbstractMigration
    {
        public function change(): void
        {
            $table = $this -> table('docs_custom_pages');
            $table -> changeColumn(
                'content',
                'text',
                [
                    'limit' => MysqlAdapter::TEXT_MEDIUM
                ]
            );
        }
    }
?>
