<?php

    Class Conexion {

        protected $pdo;

        public function __construct() {

            try {

                $dsn = "mysql:host=localhost;dbname=tema10";

                $options = [

                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_PERSISTENT =>  false,
                    PDO::ATTR_EMULATE_PREPARES =>  false,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci",
                    
                ];

                $this->pdo = new PDO($dsn, "root", null, $options);

                echo "Conexión realizada con éxito";
                echo "<br>";
            }
            catch (PDOException $e) {
                echo "Conexión no realizada";
                echo "<br>";
            }
        }

        public function cerrar_conexion(){
            $this->pdo = null;

        }


    public function getNombres(){

            $sql = "SELECT nombre FROM datos";

            $pdostmt = $this->pdo->prepare($sql);

            $pdostmt->execute();

            $resultado = $pdostmt->fetchAll(PDO::FETCH_OBJ);

               echo json_encode($resultado); 
        }
    }

        
$respuesta = new Conexion();
$respuesta->getNombres();




?>



