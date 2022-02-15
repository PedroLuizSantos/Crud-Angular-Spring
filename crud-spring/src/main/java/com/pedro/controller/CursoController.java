package com.pedro.controller;

import java.util.List;

import com.pedro.Repositorio.CursoRepositorio;
import com.pedro.models.Curso;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

  private final CursoRepositorio cursoRepositorio;

  @GetMapping
  //São iguais
  //@RequestMapping(method = RequestMethod.GET)
  public List<Curso> list(){
    return cursoRepositorio.findAll();
  }


}
