import express from "express";
import type { Request, Response, NextFunction } from "express";

const server = express();

server.use(express.json());

const cursos = ["Node.js", "JavaScript", "React Native"];

// Middleware Global
server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Url chamada: ${req.url}`);

  return next();
});

function checkCurso(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" });
  }

  return next();
}

function checkIndexCurso(req: Request, res: Response, next: NextFunction) {
  const curso = cursos[Number(req.params.index)];
  if (!curso) {
    return res.status(400).json({ error: "O curso não existe" });
  }

  return next();
}

server.get("/cursos", (req: Request, res: Response) => {
  return res.json(cursos);
});

server.get("/cursos/:index", checkIndexCurso, (req: Request, res: Response) => {
  const index = Number(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= cursos.length) {
    return res.status(400).json({ error: "índice inválido." });
  }

  return res.json(cursos[index]);
});

server.post("/cursos", checkCurso, (req: Request, res: Response) => {
  const { name } = req.body;

  if (cursos.includes(name)) {
    return res
      .status(400)
      .json({ error: `O curso ${name} já existe no sistema.` });
  }

  cursos.push(name);
  return res.json(cursos);
});

server.put(
  "/cursos/:index",
  checkIndexCurso,
  checkCurso,
  (req: Request, res: Response) => {
    const index = Number(req.params.index);
    const { name } = req.body;

    if (Number.isNaN(index) || index < 0 || index >= cursos.length) {
      return res.status(400).json({ error: "Índece inválido." });
    }

    if (cursos.includes(name)) {
      return res
        .status(400)
        .json({ error: `O curso ${name} já existe no sistema.` });
    }

    cursos[index] = name;

    return res.json(cursos);
  }
);

server.delete(
  "/cursos/:index",
  checkIndexCurso,
  (req: Request, res: Response) => {
    const index = Number(req.params.index);

    if (Number.isNaN(index) || index < 0 || index >= cursos.length) {
      return res.status(400).json({ error: "Índece inválido." });
    }

    cursos.splice(index, 1);

    return res.json(cursos);
  }
);

server.listen(3000, () => {
  console.log("Servidor online!");
});
