# Basic makefile to compile my two pdfs

# Main variables
LCC = pdflatex
DEPS = res.cls

NAMEPREFIX=gonzalez-abraham
CV=$(NAMEPREFIX)-cv.pdf
RESUME=$(NAMEPREFIX)-resume.pdf

# Commands

all: $(CV) $(RESUME)

clean:
	@rm -rf *.pdf
	@rm -rf *.aux
	@rm -rf *.out
	@rm -rf *.log

$(CV): cv.tex $(DEPS)
	$(LCC) cv.tex --jobname=cv
	$(LCC) cv.tex --jobname=cv
	mv cv.pdf $(CV)

$(RESUME): resume.tex $(DEPS)
	$(LCC) resume.tex --jobname=resume
	$(LCC) resume.tex --jobname=resume
	mv resume.pdf $(RESUME)
