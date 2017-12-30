 <?php
        include("data.php");
		
		$os = $_GET['os'];

        $query = "SELECT descricao FROM ordem_servico WHERE os='$os'";
        $resultado = @mysqli_query($_SG['link'], $query);
        if (@mysqli_num_rows($resultado) > 0) {
            while ($info = @mysqli_fetch_array($resultado)) {
                echo "Situação: " .$info['descricao'];
            }
        }
		else
			echo 0;
?>    
