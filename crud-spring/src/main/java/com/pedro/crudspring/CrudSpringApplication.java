package com.pedro.crudspring;

import com.pedro.Repositorio.CursoRepositorio;
import com.pedro.models.Curso;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

  CommandLineRunner initDatabase(CursoRepositorio cursoRepositorio){
    return args -> {
      cursoRepositorio.deleteAll();

      Curso c = new Curso();
      c.setName("Angular com Spring");
      c.setCategory("Front-End");

      cursoRepositorio.save(c);
    };
  }

}
