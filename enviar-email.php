<?php
		

		require_once("phpmailer/class.phpmailer.php");

		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$telefone = $_POST['telefone'];
		$mensagem = $_POST['mensagem'];
		

		$conteudo = '';
		$conteudo .= ($nome)? 'Nome: '.$nome."\r\n": '';
		$conteudo .= ($email)? 'E-mail: '.$email."\r\n": '';
		$conteudo .= ($telefone)? 'Telefone: '.$telefone."\r\n": '';
		$conteudo .= ($mensagem)? 'Mensagem: '.$mensagem."\r\n": '';

		define('GUSER', 'contato@tatue.vc');	// <-- Insira aqui o seu GMail
		define('GPWD', 'sharedn0w');		// <-- Insira aqui a senha do seu GMail

		function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
			global $error;
			$mail = new PHPMailer();
			$mail->IsSMTP();		// Ativar SMTP
			$mail->SMTPDebug = 1;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
			$mail->SMTPAuth = true;		// Autenticação ativada
			$mail->SMTPSecure = 'ssl';	// SSL REQUERIDO pelo GMail
			$mail->Host = 'p3plcpnl0413.prod.phx3.secureserver.net';	// SMTP utilizado
			$mail->Port = 465;  		// A porta 465 deverá estar aberta em seu servidor
			$mail->Username = 'contato@tatue.vc';
			$mail->Password = 'sharedn0w';
			$mail->SetFrom($de, $de_nome);
			$mail->Subject = $assunto;
			$mail->Body = $corpo;
			$mail->CharSet = 'UTF-8';
			$mail->AddAddress($para);
			if(!$mail->Send()) {
				$error = 'Mail error: '.$mail->ErrorInfo; 
				return false;
			} else {
				$error = 'Sem erro';
				return true;
			}
		}

		$assunto = '[rique.co] Contato';

		$conteudo = '';

		$mail = smtpmailer($email, 'contato@tatue.vc' , 'RIQUE.CO', $assunto, $conteudo);

		echo ($mail)? 1 : 0;



	die();

	?>